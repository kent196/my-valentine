import logo from './logo.svg';
import './App.css';
import { Box, Button, Dialog, DialogContent, DialogTitle, Paper, Typography } from '@mui/material';
import  wallpaper from './assets/Wallpaper.jpg'
import arrow from './assets/arrow-removebg-preview.png'
import envelope from './assets/envelope.jpg'
import curious from './assets/curious.jpg'
import heart from './assets/heart.ico'
import { useState } from 'react';
import { Helmet } from 'react-helmet';


function App() {

  const [openPaper,setOpenPaper] = useState(false);
  const [image,setImage] = useState(envelope);

  const openMessage = () => {
    setOpenPaper(true);
  }
  

  return (
    <Box className="App"
    height={'100vh'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    sx={{
      backgroundImage:`url(${wallpaper})`,
    }}>
      <Helmet>
      <title>Your Love Letter</title>
      </Helmet>
      <Box width={'500px'} height={'500px'}  p={'10px'}>
      <Box>
        <Typography fontSize={'30px'} sx={{
          fontFamily:'Protest Riot', textAlign:'right'
        }}>Open me ❤️</Typography>
      </Box>
      <Box width={'100%'} height={'250px'} display={'flex'} justifyContent={'right'}>
        <img width={'200px'} height={'100%'} src={arrow}/>
      </Box>
      <Box width={'100%'} height={'100px'}>
      <Button
  disableRipple
  onClick={openMessage}
  sx={{
    ":hover": {
      animation: 'shake 0.5s ease', // Apply the shake animation on hover
    },
    '@keyframes shake': {
      '0%, 100%': {
        transform: 'translateY(0)', // Initial and final position
      },
      '20%, 60%': {
        transform: 'translateX(-10px)', // Move left
      },
      '40%, 80%': {
        transform: 'translateY(10px)', // Move right
      },
    },
  }}
>
  <img
    width={'200px'}
    height={'100%'}
    src={image}
    style={{
      borderRadius: '10px',
    }}
  />
</Button>


      </Box>
      </Box>
      <Dialog open={openPaper} onClose={() => setOpenPaper(false)} fullWidth>
        <DialogTitle>
        <Typography sx={{
            fontFamily:'Protest Riot',fontSize:'25px',color:'#A11611'
          }}>Gửi người yêu của anh 🌷</Typography>
        </DialogTitle>
      <DialogContent>
       <Box  sx={{width:'100%',height:'500px'}} display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={'20px'}>
          
          <Typography sx={{
            fontFamily:'Protest Riot',fontSize:'16px'
          }}>
            Valentine năm ngoái anh đã làm em thất vọng rất nhiều, không chỉ thế mà trong 1 năm yêu nhau vừa qua anh cũng đã làm em buồn không ít chuyện, vì thế mà Valentine năm nay, anh muốn làm thật tốt để có thể bù đắp cho em những gì mà em đã phải trải qua, anh mong bức thư này sẽ giúp em phần nào cảm thấy vui vẻ.
          </Typography>
          <Typography sx={{
            fontFamily:'Protest Riot',fontSize:'16px'
          }}>Cảm ơn em vì đã tin tưởng và yêu thương anh suốt 1 năm vừa qua. Mong chúng mình sẽ cùng nhau đi qua thêm nhiều mùa Valentine nữa nhe ❤️</Typography>
          <Typography textAlign={'right'} sx={{
            fontFamily:'Protest Riot',fontSize:'16px'
          }}>Love u so muchhhh 🫂</Typography>
       </Box>
      </DialogContent>
      </Dialog>
    </Box>

   
  );
}

export default App;
