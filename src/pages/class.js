import React from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import WorkIcon from '@material-ui/icons/Work';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    minWidth: 275,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,  
    
    
  },
  drawerPaper: {
    width: drawerWidth,
    
  },
  drawerContainer: {
    overflow: 'auto',
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(10),
    width: '50%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(30),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
    textAlign: 'center',
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
   
  },
  text: {
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ClippedDrawer() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ChatBubbleOutlineIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar); 
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.grow}>
      {/* baruuuuuuu */}
    <div className={classes.root}>
    
      <CssBaseline />
      <AppBar  className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Topic..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Dashboard', 'Task', 'Calendar'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 4 === 0 ? <DashboardIcon /> : <CheckCircleOutlineIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <h2>Course 1</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="text" href="/" onClick={handleClick}>
            Dashboard
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Course 1
          </Link>
        </Breadcrumbs>
    <Grid container spacing={200}>  
    <Grid item xs={8} spacing={10}>
      <Accordion>
       <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
        <Typography className={classes.heading}>Lesson 1</Typography> 
        </AccordionSummary>
          <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
              label="Task 1"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
              label="Task 2"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
              label="Task 3"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <Typography className={classes.heading}>Lesson 2</Typography> 
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
              label="Task 1"
            />
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Task 2" />
            <FormControlLabel
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
              label="Task 3"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <Typography className={classes.heading}>Lesson 3</Typography> 
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Task 1" />
             <FormControlLabel control={<Checkbox name="checkedC" />} label="Task 2" />
             <FormControlLabel control={<Checkbox name="checkedC" />} label="Task 3" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Grid>
  <Grid item xs={4} >
    <Grid
    container
    direction="column-reverse"
    justify="space-evenly"
    alignItems="flex-end"
    >
      {/* <Paper className={classes.paper}> */}
      <Card className={classes.root}>
        
        
        <CardContent>
         <Box m={1} bgcolor="background.paper" p={1}>
            <h5>About</h5>
          </Box>

          <ListItem>
          <ListItemAvatar>
            <HomeIcon />
          </ListItemAvatar>
          <ListItemText primary="Lives in" secondary="San Francisco, SA" />
          </ListItem>

          <ListItem>
          <ListItemAvatar>
            <WorkIcon />
          </ListItemAvatar>
          <ListItemText primary="Works at" secondary="Material UI" />
          </ListItem>
          
          <ListItem>
          <ListItemAvatar>
            <LocationOnIcon />
          </ListItemAvatar>
          <ListItemText primary="Lives in" secondary="Boston" />
          </ListItem>
        </CardContent>
        
       
      </Card>
    <Card className={classes.root}>
        
        
      <CardContent>
       <Box m={1} bgcolor="background.paper" p={1}>
          <h5>Profile Details</h5>
        </Box>
        <Box m={1} bgcolor="background.paper" p={4}>
          <Avatar alt="Remy Sharp" src="../..public/img.jpg" className={classes.large} />
           
        </Box>
        <h5 className={classes.text}>John Lavender</h5>
        <Typography className={classes.pos} color="textSecondary">
          Student
        </Typography>
        <Box textAlign='center'>
          <Button variant='contained'>
           Update Info
          </Button>
        </Box>
      </CardContent>
      
     
    </Card>
    
    {/* </Paper> */}
    </Grid>
    </Grid>
  </Grid>
  <Fab color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </main>
      {renderMobileMenu}
      {renderMenu}
    </div>
  </div>
  
  );
}
