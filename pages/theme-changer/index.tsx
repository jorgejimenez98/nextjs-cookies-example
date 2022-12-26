import { CardContent, FormControl, FormLabel, Card, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import { Layout } from '../../components/layouts'

const ThemeChangerPage: FC = () =>{
  const [currentTheme, setCurrentTheme] = useState('ligth')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(e.target.value)
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