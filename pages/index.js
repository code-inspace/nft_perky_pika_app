import Link from 'next/link'
import TextBlock from '../components/TextBlock';
import Timeline from '../components/Timeline';
import Team from '../components/Team';
import Accordion from '../components/Accordion';


export default function Home() {
  return (
    <>
      <TextBlock />
      <Timeline />
      <Team />
      <Accordion />
    </>
  )
}
