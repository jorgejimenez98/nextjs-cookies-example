import Cookies from 'js-cookie'
import { Layout } from '../../components/layouts'
import { ChangeEvent, FC, useState, useEffect } from 'react'
import { CardContent, FormControl, FormLabel, Card, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import { GetServerSideProps } from 'next'
import axios from 'axios'

const ThemeChangerPage: FC<{ theme: string }> = ({ theme }) =>{
  const [currentTheme, setCurrentTheme] = useState(theme)


  useEffect(() => {
    
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCurrentTheme(value)
    localStorage.setItem('theme', value)
    Cookies.set('theme', value)
  }


  const handleCLick = async () => {
    const { data } = await axios.get('/api/hello')
  }

  return <Layout>
    <Card>
      <CardContent>
        <FormControl>
          <FormLabel>Tema</FormLabel>
          <RadioGroup
            value={currentTheme}
            onChange={handleChange}
          >
            <FormControlLabel value={'ligth'} control={<Radio />} label='ligth' />
            <FormControlLabel value={'dark'} control={<Radio />} label='dark' />
            <FormControlLabel value={'custom'} control={<Radio />} label='custom' />
          </RadioGroup>
        </FormControl>

        <Button onClick={handleCLick}>
          Solicitud
        </Button>
      </CardContent>
    </Card>
  </Layout>
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'ligth' } = req.cookies
  return { props: { theme } }
}

export default ThemeChangerPage