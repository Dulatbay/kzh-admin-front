interface LogoProps {
    logoSize: "big" | 'small';
}

function Logo({logoSize}: LogoProps) {
    return (
        logoSize === "small" ? <div className="text-center">
                <h1 className={`text-primaryTextColor font-Compacta tracking-wide text-2xl leading-4`}>KZH</h1>
                <p className="text-gray-400 text-sm">admin</p>
            </div> :
            <div className="text-center">
                <h1 className={`text-primaryTextColor font-Compacta tracking-wide text-5xl`}>KZH</h1>
                <p className="text-gray-400 text-sm">admin</p>
            </div>
    );
}

export default Logo;