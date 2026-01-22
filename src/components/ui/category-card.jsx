import { Badge } from "./badge";
import { Card, CardFooter } from "./card";

let dummyUrl = 'https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_450/legacy_dam/en-us/S002088402/MXP44955-Jan-NA-HP-ProductTile-Trial-Offer-001'

export default function CategoryCard({ link = dummyUrl, text, cardStyle, textStyle, badgeText }) {

    return <Card className={`shadow-none relative border-none gap-2 ${cardStyle}`}>
        <div className="w-[250px] h-[250px] object-cover overflow-hidden rounded-2xl">
            <img className="w-full h-full" src={link} />
        </div>
      {badgeText &&  <Badge variant={'green'} className={'absolute top-3 left-2'}>{badgeText}</Badge>}
        {text && <p className={`font-bold ${textStyle}`}>{text}</p>}
    </Card>
}