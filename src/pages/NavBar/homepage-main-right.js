import React from "react"
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: '250px',
    maxWidth: 800,
};

const HomePageMainRight = () => {
    return (
        <div className="main-right">
            <div className="main-left">
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText>
                            <Link to="/search">Search</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText>
                            <Link to="/trending">Trending</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
        </div>
    )
};

export default HomePageMainRight;