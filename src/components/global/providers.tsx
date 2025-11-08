"use client";

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default Providers