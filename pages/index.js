import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Box, Flex, Text } from '@chakra-ui/react'

import Property from '../components/Property'
import { baseUrl, fetchApi } from '../utils/fetchApi'

const Banner = ({purpose, imageUrl, linkName, buttonText, title1, title2, desc1, desc2}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="3">
    <Image src={imageUrl} alt="Banner" width={500} height={300} />
    <Box p="5">
      <Text color="gray.500" fontWeight="medium" fontSize="sm">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
      <Button fontSize="lg">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertiesForRent, propertiesForSale}) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <Box m="5">
      <Banner 
      purpose="RENT A HOME"
      title1="Rentals houses for"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      buttonText="Explore renting"
      linkName="/search?purpose=for-rent"

      />
      <Flex flexWrap="wrap">
        {/* Fetch properties from API and map over them */}
        {propertiesForRent.map((property) => <Property property={property} key={property.id}/>)}
      </Flex>
      <Banner 
      purpose="BUY A HOME"
      title1="Find, buy and Own your"
      title2="Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      buttonText="Explore renting"
      linkName="/search?purpose=for-sale"

      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => <Property property={property} key={property.id}/>)}
      </Flex>
    </Box>
    
  )
}

//api call
export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)


  //pass to Home component
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }
}