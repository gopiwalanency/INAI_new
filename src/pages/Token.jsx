// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./Token.css";

// export default function Token() {
//   const [text, setText] = useState("");
//   const [tokens, setTokens] = useState([]);

//   // Dummy "tokenize" (split by spaces for demo)
//   const handleTokenize = () => {
//     if (!text.trim()) {
//       setTokens([]);
//       return;
//     }
//     const fakeTokens = text.split(/\s+/);
//     setTokens(fakeTokens);
//   };

//   return (
//     <div className="page">
//       <motion.h1
//         className="title"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         Tokenizer Playground
//       </motion.h1>

//       <div className="container">
//         <div className="con">

//         <label className="label">Enter your text below</label>
//         <textarea
//           className="textarea"
//           placeholder="Type or paste text here..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           rows="6"
//         />

//         <button className="button" onClick={handleTokenize}>
//           Tokenize
//         </button>

//         <div className="stats">
//           <p>Tokens: <strong>{tokens.length}</strong></p>
//           <p>Characters: <strong>{text.length}</strong></p>
//         </div>

//         <div className="token-box">
//           {tokens.map((t, i) => (
//             <motion.span
//               key={i}
//               className="token"
//               whileHover={{ scale: 1.15 }}
//             >
//               {t}
//             </motion.span>
//           ))}
//         </div>

//         {tokens.length > 0 && (
//           <div className="decoded">
//             <h2 className="decoded-title">Rejoined Back:</h2>
//             <div className="decoded-box">{tokens.join(" ")}</div>
//           </div>
//         )}
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./Token.css";

// export default function Token() {
//   const [text, setText] = useState("");
//   const [tokens, setTokens] = useState([]);
//   const [apiResponse, setApiResponse] = useState(null);

//   // Call API to tokenize text
//   const handleTokenize = async () => {
//     if (!text.trim()) {
//       setTokens([]);
//       setApiResponse(null);
//       return;
//     }

//     try {
//       // Example API call (replace URL with your API endpoint)
//       const res = await fetch("https://your-live-api.com/tokenize", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text }),
//       });

//       const data = await res.json();

//       // Save tokens + full API response
//       setTokens(data.tokens || []);
//       setApiResponse(data);
//     } catch (err) {
//       console.error("API error:", err);
//       setApiResponse({ error: "Failed to fetch API response" });
//     }
//   };

//   return (
//     <div className="tokenizer-container">

//       <motion.div
//         className="tokenizer-header"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//       <h1 className="tokenizer-title">Tokenizer </h1>
//         <div className="tokenizer-info">
//           <h3>Understanding Tokenization in Language Models</h3>
//           <p>
//             AI models like GPT don't read text as we do. They break the text into small portions called tokens. 
//             A token could be a full word, a piece of a word, or even punctuation. The model essentially learns 
//             how these tokens usually appear together and uses that knowledge to predict what comes next. 
//             That's how it can generate smooth, natural text.
//           </p>
//           <p>
//             You can use this tool that shows how your text is broken into tokens and how many tokens it contains. 
//             This helps in knowing how the model "sees" your input.
//           </p>
//           <p>
//             <strong>Tip:</strong> An easy way to think about tokens is that one token is usually close to one word in English. 
//             So, around 100 tokens would be roughly equal to 100 words.
//           </p>
//         </div>
//       </motion.div>


//       <div className="tokenizer-content">
//         <div className="input-section">
//           <div className="input-group">
//             <label className="input-label">Input Text</label>
//             <motion.textarea
//               className="tokenizer-textarea"
//               placeholder="Type or paste your text here..."
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               rows={6}
//               whileFocus={{ boxShadow: '0 0 0 2px #4f46e5' }}
//             />
//           </div>

//           <motion.button
//             className="tokenize-button"
//             onClick={handleTokenize}
//             whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}
//             whileTap={{ scale: 0.98 }}
//             disabled={!text.trim()}
//           >
//             Tokenize Text
//           </motion.button>
//         </div>

//         <div className="stats-container">
//           <div className="stat-card">
//             <span className="stat-label">Tokens</span>
//             <span className="stat-value">{tokens.length}</span>
//           </div>
//           <div className="stat-card">
//             <span className="stat-label">Characters</span>
//             <span className="stat-value">{text.length}</span>
//           </div>
//           <div className="stat-card">
//             <span className="stat-label">Avg. Token Length</span>
//             <span className="stat-value">
//               {text.length > 0 ? (tokens.length > 0 ? (text.length / tokens.length).toFixed(2) : '0.00') : '0.00'}
//             </span>
//           </div>
//         </div>

//         <AnimatePresence>
//           {tokens.length > 0 && (
//             <motion.div
//               className="tokens-section"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="section-title">Generated Tokens</h3>
//               <div className="tokens-grid">
//                 {tokens.map((token, index) => (
//                   <motion.div
//                     key={index}
//                     className="token-item"
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     whileHover={{
//                       scale: 1.1,
//                       zIndex: 1,
//                       boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
//                     }}
//                     transition={{ type: 'spring', stiffness: 300 }}
//                     title={`Token ${index + 1}: ${token}`}
//                   >
//                     {token}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {apiResponse && (
//             <motion.div
//               className="api-response"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="response-header">
//                 <h3 className="section-title">API Response</h3>
//                 <button
//                   className="clear-button"
//                   onClick={() => {
//                     setText('');
//                     setTokens([]);
//                     setApiResponse(null);
//                   }}
//                 >
//                   Clear All
//                 </button>
//               </div>
//               <div className="response-content">
//                 <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>




//     </div>
//   );
// }



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Token.css";

export default function Token() {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState([]);
  const [totalTokens, setTotalTokens] = useState(0);
  const [apiResponse, setApiResponse] = useState(null);

  // Call API to tokenize text
  const handleTokenize = async () => {
    if (!text.trim()) {
      setTokens([]);
      setTotalTokens(0);
      setApiResponse(null);
      return;
    }

    try {
      const res = await fetch(
        // "https://inaitest.tech/auth/api/tokenizer/analyze",
        // "https://api.inaiverse.com/auth/api/tokenizer/analyze",
        "https://api.inaiverse.com/auth/api/tokenizer/analyze",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }
      );

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      console.log("API Response:", data);

      // ✅ Total tokens direct from API
      setTotalTokens(data.tokens ?? 0);

      // ✅ Parse IDs from `id` string → ["101502", "10387"]
      let tokenIds = [];
      if (data.id) {
        const matches = data.id.match(/\d+/g);
        tokenIds = matches ? matches : [];
      }
      setTokens(tokenIds);

      setApiResponse(data);
    } catch (err) {
      console.error("API error:", err);
      setApiResponse({ error: "Failed to fetch API response" });
    }
  };

  return (
    <div className="tokenizer-container">
      {/* Header */}
      <motion.div
        className="tokenizer-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="tokenizer-title">Tokenizer</h1>
        <div className="tokenizer-info">
          <h3>Understanding Tokenization in Language Models</h3>
          <p>
            Enter some text and click <b>Tokenize Text</b>. The API will break it
            into tokens and return their IDs.
          </p>
        </div>
      </motion.div>

      <div className="tokenizer-content">
        {/* Input Section */}
        <div className="input-section">
          <div className="input-group">
            <label className="input-label">Input Text</label>
            <motion.textarea
              className="tokenizer-textarea"
              placeholder="Type or paste your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={6}
              whileFocus={{ boxShadow: "0 0 0 2px #4f46e5" }}
            />
          </div>

          <motion.button
            className="tokenize-button"
            onClick={handleTokenize}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            disabled={!text.trim()}
          >
            Tokenize Text
          </motion.button>
        </div>

        {/* Stats */}
        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-label">Total Tokens</span>
            <span className="stat-value">{totalTokens}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Characters</span>
            <span className="stat-value">{text.length}</span>
          </div>
        </div>

        {/* Token List */}
        <AnimatePresence>
          {tokens.length > 0 && (
            <motion.div
              className="tokens-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
            </motion.div>
          )}
        </AnimatePresence>

        {/* Raw API Response */}
        <AnimatePresence>
          {apiResponse && (
            <motion.div
              className="api-response"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="response-header">
                <h3 className="section-title">API Response</h3>
                <button
                  className="clear-button"
                  onClick={() => {
                    setText("");
                    setTokens([]);
                    setTotalTokens(0);
                    setApiResponse(null);
                  }}
                >
                  Clear All
                </button>
              </div>
              <div className="response-content">
                {apiResponse?.error ? (
                  <p style={{ color: "red" }}>{apiResponse.error}</p>
                ) : (
                  <div>
                    {/* Words → extract ['...','...'] */}
                    {apiResponse.words && (
                      <p>
                        <b>Tokens : </b>{" "}
                        {apiResponse.words.match(/\[.*\]/)
                          ? apiResponse.words.match(/\[.*\]/)[0]
                          : apiResponse.words}
                      </p>
                    )}

                    {/* IDs → extract [101516, 101517] */}
                    {apiResponse.id && (
                      <p>
                        <b>Token Id : </b>{" "}
                        {apiResponse.id.match(/\[.*\]/)
                          ? apiResponse.id.match(/\[.*\]/)[0]
                          : apiResponse.id}
                      </p>
                    )}
                  </div>
                )}
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* 🌐 API Endpoint Section */}
      <div className="api-endpoint-section" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        margin: '1rem 0',
        padding: '0.75rem 1rem',
        backgroundColor: '#1F2937',
        borderRadius: '8px',
        border: '1px solid #1F2937',
        maxWidth: '100%',
        overflow: 'hidden'
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '1rem',
          fontWeight: '600',
          color: '#fff',
          whiteSpace: 'nowrap'
        }}>API :</h2>
        <div style={{
          flex: 1,
          minWidth: '200px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          <span style={{
            fontFamily: 'monospace',
            color: '#2b6cb0',
            fontSize: '0.9rem',
            wordBreak: 'break-all',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'inline-block',
            maxWidth: '100%'
          }}>https://api.inaiverse.com/auth/api/tokenizer/analyze</span>
        </div>
        <button
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
            transition: 'background-color 0.2s',
            flexShrink: 0
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#4338ca'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
          onClick={() => {
            navigator.clipboard.writeText("https://api.inaiverse.com/auth/api/tokenizer/analyze");
            // Optional: Add toast notification here instead of alert
          }}
        >
          Copy Link
        </button>
      </div>

    </div>
  );
}







