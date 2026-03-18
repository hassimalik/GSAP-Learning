export default function Button({
    variant = "primary",
    size = "md",
    children = "Button",
    onClick
}) {
    // Size variants
    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
        xl: "px-8 py-4 text-lg"
    };

    // Color variants with subtle hover
    const styles = {
        outline: "bg-white border-2 border-[#5C864B] text-black hover:bg-gray-50 hover:border-[#4a6a39]",
        teal: "bg-[#5EC5C5] text-black hover:bg-[#4db3b3] hover:shadow-md",
        dark: "bg-[#1B5F5F] text-white hover:bg-[#1a4d4d] hover:shadow-md"
    };

    return (
        <button 
            onClick={onClick} 
            className={`
                rounded-[26px] 
                font-bold 
                font-poppins 
                transition-all 
                duration-200
                ${sizes[size]}
                ${styles[variant]}
            `}
        >
            {children}
        </button>
    );
}