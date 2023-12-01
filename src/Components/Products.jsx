import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [state, Setstate] = useState([]);

  try {
    useEffect(() => {
      axios
        .get("https://api.idea.uz/api/v2/products?quantity=12&category_id=6")
        .then((result) => Setstate((result.data.data)));
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <Grid>
      {
        state.map((item)=>(
          <GridItem key={item.id}>
            <Image src={item.category.img}/>
            <Heading>{item.category.name}</Heading>
            <Text>{item.category.current_price}</Text>
          </GridItem>
        ))
      }
    </Grid>
  );
};

export default Products;
