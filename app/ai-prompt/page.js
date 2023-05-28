'use client';
import React, { useState } from 'react';

function AI_promptGenerator() {
  const [inputText, setInputText] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const generatePrompt = async (e) => {
    e.preventDefault();
    if (apiKey.length < 1) {
        alert('API exceeded maximum usage');
        return;
    }
    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
              prompt: inputText,
              max_tokens: 100
            })
        });
        const data = await response.json();
    
      setGeneratedPrompt(data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
        <h1 className='head_text text-left'>
            <span className='blue_gradient'>Generate</span> Prompts
        </h1>
        <p className="desc text-left max-w-md">
            Let AI generate amazing prompts, and let your imagination run wild with any AI-powered platform.
        </p>
        <form
            onSubmit={generatePrompt}
            className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
        >
            <label>
                <span className='font-satoshi font-semibold text-base dark:text-gray-200 text-gray-700'>
                    Enter Text
                </span>
                <input
                    className='form_input'
                    type="text"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                />
            </label>
            <div className='flex-end mb-3'>
                <button  
                    onClick={generatePrompt}
                    type="submit"
                    className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
                >
                    Generate AI Prompt
                </button>
            </div>
        </form>
        {generatedPrompt && (
            <div className='mt-10 w-full max-w-2xl flex flex-wrap glassmorphism'>
                {generatedPrompt}
            </div>
        )}
    </section>
  );
}

export default AI_promptGenerator;
