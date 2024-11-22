

const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div>
            <h4>Name: {name?.common}</h4>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;