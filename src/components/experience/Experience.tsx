
'use client'



const Experience = () => {
    return (
        <>

            <ul className="relative border-l border-gray-300">
                {[{
                    year: "1984",
                    title: "First Macintosh computer",
                    description: "The Apple Macintosh played a pivotal role in establishing desktop publishing..."
                }, {
                    year: "1998",
                    title: "iMac",
                    description: "iMac is a family of all-in-one Mac desktop computers..."
                }, {
                    year: "2001",
                    title: "iPod",
                    description: "The iPod is a discontinued series of portable media players..."
                }, {
                    year: "2007",
                    title: "iPhone",
                    description: "iPhone is a line of smartphones produced by Apple Inc..."
                }, {
                    year: "2015",
                    title: "Apple Watch",
                    description: "The Apple Watch is a line of smartwatches produced by Apple Inc..."
                }].map((event, index) => (
                    <li key={index} className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <div>
                            <time className="text-sm font-mono text-gray-500">{event.year}</time>
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            <p className="text-gray-600">{event.description}</p>
                        </div>
                    </li>
                ))}
            </ul>


        </>
    );
};

export default Experience;