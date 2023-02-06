import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
            <Header />
            <diV className="container">
                <FeedbackList feedback={feedback} />
            </diV>
        </>
    )
}

export default App;