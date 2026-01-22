/**
 * Design File Uploader Component
 * Allows users to upload print-ready design files
 */

import { useState, useRef } from 'react';
import { upload4overPrintFile } from '../../services/fourOverApi';
import './DesignUploader.css';

const ACCEPTED_FORMATS = ['.pdf', '.ai', '.psd', '.eps', '.jpg', '.jpeg', '.png', '.tiff'];
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

const DesignUploader = ({ orderId, onUploadComplete, onError }) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        // Validate file type
        const extension = '.' + selectedFile.name.split('.').pop().toLowerCase();
        if (!ACCEPTED_FORMATS.includes(extension)) {
            setError(`Invalid file type. Accepted formats: ${ACCEPTED_FORMATS.join(', ')}`);
            return;
        }

        // Validate file size
        if (selectedFile.size > MAX_FILE_SIZE) {
            setError('File size exceeds 100MB limit');
            return;
        }

        setError(null);
        setFile(selectedFile);

        // Generate preview for images
        if (selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => setPreview(e.target.result);
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            const fakeEvent = { target: { files: [droppedFile] } };
            handleFileSelect(fakeEvent);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleUpload = async () => {
        if (!file) return;

        try {
            setUploading(true);
            setUploadProgress(0);

            // Simulate progress for better UX
            const progressInterval = setInterval(() => {
                setUploadProgress(prev => Math.min(prev + 10, 90));
            }, 200);

            const result = await upload4overPrintFile(orderId, file);
            
            clearInterval(progressInterval);
            setUploadProgress(100);

            setTimeout(() => {
                onUploadComplete?.(result);
            }, 500);
        } catch (err) {
            setError('Upload failed. Please try again.');
            onError?.(err);
        } finally {
            setUploading(false);
        }
    };

    const handleRemove = () => {
        setFile(null);
        setPreview(null);
        setError(null);
        setUploadProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };

    const getFileIcon = (fileName) => {
        const ext = fileName.split('.').pop().toLowerCase();
        const icons = {
            pdf: '📄',
            ai: '🎨',
            psd: '🖼️',
            eps: '📐',
            jpg: '🖼️',
            jpeg: '🖼️',
            png: '🖼️',
            tiff: '🖼️'
        };
        return icons[ext] || '📁';
    };

    return (
        <div className="design-uploader">
            <div className="uploader-header">
                <h3>Upload Your Design</h3>
                <p>Upload your print-ready design file</p>
            </div>

            {!file ? (
                <div 
                    className="upload-dropzone"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept={ACCEPTED_FORMATS.join(',')}
                        onChange={handleFileSelect}
                        hidden
                    />
                    <div className="dropzone-content">
                        <div className="dropzone-icon">📤</div>
                        <p className="dropzone-text">
                            Drag & drop your file here or <span>browse</span>
                        </p>
                        <p className="dropzone-formats">
                            Accepted: PDF, AI, PSD, EPS, JPG, PNG, TIFF (max 100MB)
                        </p>
                    </div>
                </div>
            ) : (
                <div className="file-preview">
                    {preview ? (
                        <div className="preview-image">
                            <img src={preview} alt="Preview" />
                        </div>
                    ) : (
                        <div className="preview-icon">
                            {getFileIcon(file.name)}
                        </div>
                    )}
                    
                    <div className="file-info">
                        <p className="file-name">{file.name}</p>
                        <p className="file-size">{formatFileSize(file.size)}</p>
                    </div>

                    {!uploading && (
                        <button className="remove-btn" onClick={handleRemove}>
                            ✕
                        </button>
                    )}
                </div>
            )}

            {error && (
                <div className="upload-error">
                    <span>⚠️</span> {error}
                </div>
            )}

            {uploading && (
                <div className="upload-progress">
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${uploadProgress}%` }}
                        />
                    </div>
                    <span>{uploadProgress}%</span>
                </div>
            )}

            {file && !uploading && (
                <button className="upload-btn" onClick={handleUpload}>
                    Upload Design
                </button>
            )}

            <div className="upload-tips">
                <h4>Design Tips:</h4>
                <ul>
                    <li>Use CMYK color mode for best print results</li>
                    <li>Include 0.125" bleed on all sides</li>
                    <li>Keep important content 0.25" from edges</li>
                    <li>Resolution should be 300 DPI minimum</li>
                </ul>
            </div>
        </div>
    );
};

export default DesignUploader;
