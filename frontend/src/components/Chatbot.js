import React, { useState } from "react";
import { askQuestion, suggestedQueries } from "../services/api";

function Chatbot({ chatMessages, setChatMessages }) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (questionText) => {
    if (!questionText.trim()) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: questionText
    };

    const nextMessages = [...chatMessages, userMessage];
    setChatMessages(nextMessages);
    setInputValue("");
    setLoading(true);

    const answer = await askQuestion(questionText, nextMessages);

    setChatMessages([
      ...nextMessages,
      {
        id: Date.now() + 1,
        role: "assistant",
        content: answer
      }
    ]);
    setLoading(false);
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <h2>Ask the AI</h2>
          <p className="muted-text">
            Ask natural-language questions and continue with follow-up prompts.
          </p>
        </div>
      </div>

      <div className="query-list">
        {suggestedQueries.map((query) => (
          <button
            key={query}
            className="query-chip"
            onClick={() => handleSend(query)}
          >
            {query}
          </button>
        ))}
      </div>

      <div className="chat-box">
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "assistant"
                ? "message-bubble assistant-message"
                : "message-bubble user-message"
            }
          >
            <span className="message-role">
              {message.role === "assistant" ? "AI" : "You"}
            </span>
            <p>{message.content}</p>
          </div>
        ))}

        {loading && (
          <div className="message-bubble assistant-message">
            <span className="message-role">AI</span>
            <p>Thinking...</p>
          </div>
        )}
      </div>

      <div className="composer-row">
        <input
          className="input-control"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Example: Which customers are likely to churn in the next 90 days?"
        />
        <button className="primary-button" onClick={() => handleSend(inputValue)}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
