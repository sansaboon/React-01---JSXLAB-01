const firstName = 'sansaboon';
const lastName = 'ounnart';
const birthDate = new Date(1990, 0, 15); 
const styles = {
    heading: {
        color: 'blue',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: '18px',
        textAlign: 'center',
    }
};


const calculateAge = (birthDate) => {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years,
        months,
        days
    };
};

const App = () => {
    const { years, months, days } = calculateAge(birthDate);

    return (
        <div>
            <h1 style={styles.heading}>
                {firstName} {lastName}
            </h1>
            <p style={styles.paragraph}>
                Age: {years} ปี {months} เดือน {days} วัน
            </p>
        </div>
    );
};

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
