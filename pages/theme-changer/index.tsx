import Cookies from 'js-cookie'
import { Layout } from '../../components/layouts'
import { ChangeEvent, FC, useState } from 'react'
import { CardContent, FormControl, FormLabel, Card, RadioGroup, FormControlLabel, Radio } from '@mui/material'

const ThemeChangerPage: FC = () =>{
  const [currentTheme, setCurrentTheme] = useState('ligth')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCurrentTheme(value)
    localStorage.setItem('theme', value)
    Cookies.set('theme', value)
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
      </CardContent>
    </Card>
  </Layout>
}

export default ThemeChangerPage