import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '15px'
    },
    typography: {
        width: '100%',
        textAlign: 'center',
        fontSize: '5rem',
        fontFamily: [
            'Yellowtail',
        ].join(','),

    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
        alignItems: 'left'

    },
    [theme.breakpoints.down('sm')]: {
        mobileGrid: {
            flexDirection: 'column-reverse'
        }
    }

}))