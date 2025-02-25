import Image from "next/image";

interface ButtonProps {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: "btn_dark_green" | "btn_dark_green_outline" | "btn_green" | "btn_white" | "btn_white_text";
    full?: boolean
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
    return (
        <button
            className={`flexCenter gap-3 rounded-full border cursor-pointer ${variant}
            ${full ? 'w-full' : ''}
            `}
            type={type} title="Login">
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
        </button>
    )
}

export default Button