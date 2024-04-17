import '../../src/App.css';
import { CircularProgress, Dialog } from '@mui/material';
import { useSelector } from 'react-redux';

const Loader = () => {
    const loaderContent = useSelector(store => store.user.loaderContent);
    return (
        <div>
            <Dialog
                open={loaderContent}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <CircularProgress style={{ backgroundColor: "transparent", margin: "10px" }} />
            </Dialog>
        </div>
    )
}
export default Loader;