import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faRocket, faUsers, faLock, faBook, faChalkboardTeacher, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function TestimonialCard({ quote, name, title, rating }){
    
    return(
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex justify-between items-start mb-4">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-sky-500 text-xl" />
                <div className="flex">
                    {[...Array(rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-sm ml-1" />
                    ))}
                </div>
            </div>
                <p className="text-gray-700 mb-6 italic">
                   &quot;{quote}&quot;
                </p>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 mr-4 flex items-center justify-center text-gray-400">
                    <FontAwesomeIcon icon={faUsers} />
                </div>
                <div>
                    <p className="text-gray-900 font-semibold">{name}</p>
                    <p className="text-gray-600 text-sm">{title}</p>
                </div>
            </div>
        </div>
    )
}