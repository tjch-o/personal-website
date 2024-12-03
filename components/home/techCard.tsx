import Image from 'next/image';

interface techCardProps {
    name: string;
    key: number;
}

const TechCard = ({ name, key }: techCardProps) => {
    return (
        <Image src={`home/${name.toLowerCase()}.svg`} alt={`${name}`} width={100} height={100} />
    );
};

export default TechCard;
