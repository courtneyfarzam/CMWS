const SectionTitle = ({
    title, 
    paragraph, 
    width = '570px',
    center,
    mb = '100px'
}: {
    title: string;
    paragraph: string;
    width?: string;
    center?: boolean;
    mb?: string;
}) => {
    return (
        <>

        <div className={`${center ? 'mx-auto text-center' : ' '}`}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>

        </>
    )
};

export default SectionTitle;