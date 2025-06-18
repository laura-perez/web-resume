import { personalInfo } from '../data/profile';

export default function Profile() {
  return (
    <div className="profile-section">
      {/* Profile Header */}
      <div className="flex items-start space-x-4 mb-4">
        {/* Profile Picture with Story Ring */}
        <div className="story-ring">
          <div className="story-inner">
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
          {/* Stats */}
        <div className="flex-1 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-semibold text-lg text-ig-gray-800">6</div>
            <div className="text-sm text-ig-gray-500">posts</div>
          </div>
          <div>
            <div className="font-semibold text-lg text-ig-gray-800">428</div>
            <div className="text-sm text-ig-gray-500">followers</div>
          </div>
          <div>
            <div className="font-semibold text-lg text-ig-gray-800">312</div>
            <div className="text-sm text-ig-gray-500">following</div>
          </div>
        </div>
      </div>
        {/* Profile Info */}
      <div className="space-y-2 mb-6">
        <h2 className="font-semibold text-lg text-ig-gray-800">{personalInfo.name}</h2>
        <p className="text-base font-medium text-retro-purple">{personalInfo.title}</p>
        <p className="text-base text-ig-gray-600">{personalInfo.bio}</p>
        <div className="flex items-center text-base text-ig-gray-500">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {personalInfo.location}
        </div>
        <a 
          href={`https://${personalInfo.website}`}
          className="text-base text-retro-blue hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {personalInfo.website}
        </a>
      </div>
        {/* Action Buttons */}
      <div className="flex space-x-2 mb-4">
        <a 
          href={`mailto:${personalInfo.email}`}
          className="flex-1 bg-retro-purple hover:bg-opacity-90 text-white text-sm font-medium py-2 px-4 rounded-ig-sm transition-all duration-200 text-center"
        >
          Message
        </a>
        <a 
          href={`tel:${personalInfo.phone}`}
          className="flex-1 bg-ig-gray-100 hover:bg-ig-gray-200 text-ig-gray-800 text-sm font-medium py-2 px-4 rounded-ig-sm transition-colors text-center"
        >
          Appeler
        </a>
        <a 
          href={`https://linkedin.com/in/${personalInfo.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ig-gray-100 hover:bg-ig-gray-200 text-ig-gray-800 text-sm font-medium py-2 px-3 rounded-ig-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </a>
      </div>
      
      {/* Story Highlights */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {['Travail', 'Code', 'Hobbies', 'Voyages'].map((highlight, index) => (
          <div key={highlight} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-ig-gray-200 border-2 border-ig-gray-300 flex items-center justify-center">
              <span className="text-2xl">
                {index === 0 && '💼'}
                {index === 1 && '💻'}
                {index === 2 && '🎨'}
                {index === 3 && '✈️'}
              </span>
            </div>
            <span className="text-xs text-ig-gray-600">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
