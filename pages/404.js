import Link from 'next/link'
import SvgNotFound from '../assest/svg/not-found.svg';
function NotFound() {
    return(
        <>
        <div className="not-found">
            <h1>يوجد خطأ !</h1>
            <div className="svg-not">
                <SvgNotFound />
            </div>
            <p>الصفحة غير موجودة <Link href="/"><a>التوجه للصفحة الرئيسية</a></Link></p>
        </div>
        <style jsx>
            {`
                .not-found{
                    text-align: center;
                    margin: 0 0 50px 0;
                }
                .svg-not{
                    max-width: 100vw;
                }
                .svg-not svg{
                    width: 500px;
                    height: 500px;
                    max-width: 100%;
                }
                .not-found p{
                    font-size: 20px;
                }
                .not-found p a{
                    color: var(--primary);
                    font-weight: 700;
                }
            `}
        </style>
        </>
    )
}

export default NotFound;