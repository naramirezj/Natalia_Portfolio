import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

// Backend URL from Vite env
const API_URL = import.meta.env.VITE_AGENT_API_URL || "http://localhost:8080";

const TypingMessage = ({ text, speed = 12 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let index = 0;

    const interval = setInterval(() => {
      index += 1;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="prose prose-invert prose-sm max-w-none">
      <ReactMarkdown>{displayedText}</ReactMarkdown>
    </div>
  );
};

const RecruiterAgent = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Natalia AI. Ask me about Natalia's background, projects, experience, or technical strengths.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ref for the scrollable chat box itself
  const chatContainerRef = useRef(null);

  // Only scroll inside the chat container, not the whole page
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      const assistantMessage = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err.message || "Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const starterPrompts = [
    "What kind of engineer is Natalia?",
    "What are Natalia's strongest technical skills?",
    "Tell me about Natalia's machine learning projects.",
    "Why would Natalia be a good hire?",
  ];

  return (
  <section className="w-full py-16 px-4 sm:px-6" id="agent">
    <div className="max-w-4xl mx-auto bg-tertiary rounded-2xl p-4 sm:p-6 shadow-lg">
      <div className="mb-6 text-left">
        <h2 className="text-white font-bold text-2xl sm:text-3xl">
          Ask Natalia AI
        </h2>
        <p className="text-secondary mt-2 text-sm sm:text-base max-w-2xl">
          A recruiter-friendly assistant trained on Natalia&apos;s portfolio,
          experience, and selected work.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 justify-start">
        {starterPrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => setInput(prompt)}
            className="bg-black-200 text-white sm:text-sm px-3 py-2 rounded-lg hover:bg-black-100 transition text-left"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div
        ref={chatContainerRef}
        className="bg-black-100 rounded-xl p-4 sm:p-4 h-[380px] sm:h-[420px] overflow-y-auto flex flex-col gap-3"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[90%] sm:max-w-[85%] px-4 py-3 rounded-2xl text-sm sm:text-base whitespace-pre-wrap ${
              message.role === 'user'
                ? 'self-end bg-[#93278f] text-white'
                : 'self-start bg-[#1f1f1f] text-white'
            }`}
          >
            {message.role === 'assistant' ? (
              index === messages.length - 1 && !loading ? (
                <TypingMessage text={message.content} />
              ) : (
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              )
            ) : (
              message.content
            )}
          </div>
        ))}

        {loading && (
          <div className="self-start bg-[#1f1f1f] text-white px-4 py-3 rounded-2xl text-sm sm:text-base animate-pulse">
            Natalia AI is thinking...
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Natalia's experience, projects, or strengths..."
          className="flex-1 rounded-xl px-4 py-3 bg-black-100 text-white outline-none border border-transparent focus:border-[#93278f] text-sm sm:text-base"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-[#93278f] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-60 w-full sm:w-auto"
        >
          Send
        </button>
      </div>

      {error && (
        <p className="text-red-400 mt-3 text-sm">
          Error: {error}
        </p>
      )}

      <p className="text-secondary text-xs mt-4 text-left">
        This assistant answers based on approved portfolio materials and may not
        know anything outside those sources.
      </p>
    </div>
  </section>
  );
};

export default RecruiterAgent;