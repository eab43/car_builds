import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
    },
    typography: {
        width: '100%',
        textAlign: 'left',
        marginLeft: '15px',

    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
        alignItems: 'left'

    },

}))