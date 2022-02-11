import Link from "next/link";
import Image from "next/image";
import { Box,   Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import {BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from "millify";
import DefaultImage from '../assets/images/sa-rapita-ge58e9c8fc_1920.jpg';

const Property = ({ property: { coverPhoto, rentFrequency, price, rooms, title, baths, area, agency, isVerified, externalID} }) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" width="400px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box width="full">
                <Image src={coverPhoto ? coverPhoto.url: DefaultImage} width={400} height={260} alt="House"/>
            </Box>
            <Box>
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                        <Text fontWeight="bold" fontSize="lg">USD{millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                        
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url}/>
                    </Box> 
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms} <FaBed /> {baths} <FaBath /> | {millify(area)}sqft<BsGridFill /> 
                </Flex>
                <Text fontSize="lg" >
                    {title.lenth>30 ? `${title.substring(0, 30)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default Property;
//rentFrequency, price, rooms, title, baths, area, agency, isVerfied,