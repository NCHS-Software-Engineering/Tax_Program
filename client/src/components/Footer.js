// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				
			</h1>
			<FooterContainer>
				<Row>
                    <Column>
						<Heading>About Us</Heading>
                        <FooterLink >
                        We are the Tax App Team, a group of students from Naperville Central High School who wanted to make an app to help students in Consumer Economics classes with the 1040 form
					    </FooterLink>
                        
                    </Column>
					<Column>
						<Heading>Contact</Heading>
                        <FooterLink>
							Mitchell Kaszuba: smkaszuba2@stu.naperville203.org <br/>
							Matthew Scoles: msscoles@stu.naperville203.org <br/>
							Guzal Rustamova: gurustamova@stu.naperville203.org <br/>
					    </FooterLink> 
					</Column>
					<Column>
						<Heading>Help</Heading>
						<FooterLink >
							1. Input for gross income <br/>
							2. Input your marital status <br/>
							3. Observe the amount you owe in taxes <br/>
						</FooterLink>
					</Column>
					
				</Row>
			</FooterContainer>

		</Box>
        
	);
};
export default Footer;
