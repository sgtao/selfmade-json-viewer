// JsonConverterCard.jsx
import { useState } from 'react';
import TextInput from './TextInput';
import ObjectViewer from './ObjectViewer';

const JsonConverterCard = () => {
  const [text, setText] = useState('');
  const [checkResult, setCheckResult] = useState('');
  const [isJson, setIsJson] = useState(false);
  const [shownObj, setShownObj] = useState({});

  const checkTextInput = async () => {
    try {
      const parsedJson = await JSON.parse(text);
      setCheckResult('JSON format');
      console.dir(parsedJson);
      setShownObj(parsedJson);
      const stringJson = await JSON.stringify(parsedJson, undefined, 2);
      console.log(stringJson);
      setIsJson(true);
    } catch (e) {
      setIsJson(false);
      setCheckResult('Not JSON format');
    }
  };

  return (
    <div>
      <div className="card">
        <TextInput textInputState={[text, setText]} />
        <p aria-label="Entered-Text">Entered Text: {text}</p>
        <button aria-label="Check-JSON" onClick={checkTextInput}>
          Check & Beautify
        </button>
        <p aria-label="Check-Result">Check Result: {checkResult}</p>
        {isJson && <ObjectViewer obj={shownObj} />}
      </div>
    </div>
  );
};

export default JsonConverterCard;
