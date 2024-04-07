import React, { useState, useEffect } from "react";
import OpenAI from 'openai';

function Finalproduct({ codeValue, problemValue, selectedLanguageValue }) {
    const [generatedCode, setGeneratedCode] = useState('');

    const openai = new OpenAI({ apiKey: 'Something', dangerouslyAllowBrowser: true});

    useEffect(() => {
        const callAPI = async () => {
            const stream = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "system", content: `${codeValue}\n ${problemValue}, how can I fix it using ${selectedLanguageValue}` }],
                stream: true,

            });
            console.log('Response Data:', stream.data); // Log the response data
            const choices = stream.data.choices;
            if (choices && choices.length > 0) {
                const generatedCode = choices[0]?.delta?.content || '';
                setGeneratedCode(generatedCode);
            } else {
                console.error('No choices found in the response');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        };

        callAPI();
    }, [codeValue, problemValue, selectedLanguageValue]);

    return (
        <div>
            <div>Generated Code:</div>
            <pre>{generatedCode}</pre>
        </div>
    );
}

export default Finalproduct;
