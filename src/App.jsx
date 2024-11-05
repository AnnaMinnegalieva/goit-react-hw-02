import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Description from './components/Description/Description'
import Notification from './components/Notification';


const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });


  useEffect(() => {
    const storedFeedback = localStorage.getItem('feedback');
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className="app">
      <Description />
      <Options onFeedbackClick={updateFeedback} totalFeedback={totalFeedback} onReset={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};



export default App;
