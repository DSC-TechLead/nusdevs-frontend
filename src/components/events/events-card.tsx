import "./events-card.css"

interface EventsCardProps {
    imageSrc: string,
    imageAlt: string,
    description: string
}

const EventsCard: React.FC<EventsCardProps> = ({imageSrc, imageAlt, description}) => {
    return(
        <div className="card">
            <img src={imageSrc} alt={imageAlt} className="image"/>
            <div className="description">
                {description}
            </div>
        </div>
    )
}

export default EventsCard