import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  priority?: boolean;
}

const EventCard = ({
  title,
  image,
  slug,
  location,
  date,
  time,
  priority,
}: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <div className="relative w-full h-75 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
        />
      </div>

      <div className="flex flex-row gap-2">
        <Image
          src="/icons/pin.svg"
          alt="location"
          width={14}
          height={14}
          className="w-3.5 h-auto"
        />
        <p>{location}</p>
      </div>

      <p className="title">{title}</p>

      <div className="datetime">
        <div>
          <Image
            src="/icons/calendar.svg"
            alt="date"
            width={14}
            height={14}
            className="w-3.5 h-auto"
          />
          <p>{date}</p>
        </div>
        <div>
          <Image
            src="/icons/clock.svg"
            alt="time"
            width={14}
            height={14}
            className="w-3.5 h-auto"
          />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
