import { calculateInvestmentResults } from "../assets/investment";


const Results = ({input}) => {

    const resultsData = calculateInvestmentResults(input)

    return  (<>
    <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investments Value</th>
                <th>Interests</th>
                <th>Total Interests</th>
                Invested Capital
            </tr>
        </thead>
    <tbody>
        {resultsData.map(yearData => {
            console.log(yearData)
            return  <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.valueEndOfYear}</td>
            <td>{yearData.interest}</td>
            <td>{yearData.annualInvestment}</td>
            </tr>
        }   )}
    </tbody>

    </table>
    
    </>)

}

export default Results