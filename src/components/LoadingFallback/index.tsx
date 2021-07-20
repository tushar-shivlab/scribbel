import './LoadingFallback.css';

export const LoadingFallback = () => {
    return (
        <div className="min-h-screen flex justify-center items-baseline">
            <div className="loader p-5 rounded-full flex space-x-3">
                <div className="w-5 h-5 bg-blue-800 rounded-full animate-bounce"></div>
                <div className="w-5 h-5 bg-blue-800 rounded-full animate-bounce"></div>
                <div className="w-5 h-5 bg-blue-800 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};
