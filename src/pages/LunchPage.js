import React, { useState } from 'react';

import { 
    MDBBtn, 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCarousel,
    MDBCarouselItem,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBTypography,
    MDBCollapse,

  } from 'mdb-react-ui-kit';

export default function LunchPage() {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);


    return (
        <>
            <MDBContainer>
                <MDBRow>
                        <MDBCarousel style={{padding: "0px"}} showIndicators showControls fade>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={1}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                                alt='...'
                            >
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </MDBCarouselItem>

                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={2}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                                alt='...'
                            >
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </MDBCarouselItem>

                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                                alt='...'
                            >
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </MDBCarouselItem>
                        </MDBCarousel>
                </MDBRow>
            </MDBContainer>
            <div className='space'></div>
            <MDBContainer>
                <MDBRow className='mb-3'>
                    <MDBCol size='4'>
                        
                    </MDBCol>
                    <MDBCol size='4'>
                        <MDBTypography className='d-flex justify-content-center' tag='h1'>FoodNstuff</MDBTypography>
                        <MDBTypography className='d-flex justify-content-center' >
                            The mighty describing text
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol size='4'>
                        
                    </MDBCol>
                </MDBRow>


                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBBtn onClick={toggleShow}>Show</MDBBtn>
                            <MDBCollapse show={showShow}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                                keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </MDBCollapse>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
          
        </>
    )
}