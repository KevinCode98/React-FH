import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, numberUser }) => {
    return (
        <>
            <h1 data-testid="test-title"> { title } </h1>
            {/*<code> {JSON.stringify(newMessage)} </code>*/ }
            <p>{ subtitle }</p>
            <p>{ subtitle }</p>
            <p>Your id is: { 100 }</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    // title: "No hay titulo! :c",
    subtitle: "No hay subtitulo! :c",
    name: "Kevin Carrillo"
};