import React,{useState} from 'react'
import uw from '../images/uw.jpg'
import hw from '../images/hw.jpg'
import ow from '../images/ow.jpg'
import obese from '../images/obese.jpg'

export const BmiApp = () => {
  
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
  
    const calculateBMI = () => {
        const weightValue = parseFloat(weight);
        const heightValue = parseFloat(height);
        
        const bmiValue = (weightValue / Math.pow(heightValue / 100,2));
        setBMI(bmiValue);
}

    
        return (
            <div className="App">
            <h1>BMI Calculator</h1>
            <div>
              <label>Weight (kg):<input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}/>
              </label>
            </div>
            <div>
            <label>Height (cm): <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </label>
          </div>
          <div>
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
          
      <div>
  
      <p>Your BMI: {bmi}</p>
      
     

    </div>   
</div>
)
}
export default BmiApp;
