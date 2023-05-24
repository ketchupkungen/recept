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
    MDBListGroup, 
    MDBListGroupItem

  } from 'mdb-react-ui-kit';

export default function HomePage() {
 /*    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow); */

    const [collapseStates, setCollapseStates] = useState({
        card1: false,
        card2: false,
      });
    
      const toggleCollapse = (cardId) => {
        setCollapseStates((prevState) => ({
          ...prevState,
          [cardId]: !prevState[cardId],
        }));
      };


    return (
        <>
            <MDBContainer>
                <MDBRow>
                        <MDBCarousel style={{padding: "0px"}} showIndicators showControls fade>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={1}
                                src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                                alt='...'
                            >
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </MDBCarouselItem>

                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={2}
                                src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                                alt='...'
                            >
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </MDBCarouselItem>

                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
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
                        {/* Card content */}
                        <MDBCardImage
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </MDBCardText>
                            {/* Collapse content */}
                            <MDBCollapse show={collapseStates.card1}>
                            <MDBListGroup style={{ minWidth: '22rem' }} light>
                                <MDBListGroupItem active noBorders aria-current='true' className='px-3'>
                                    Ingredienser
                                </MDBListGroupItem>
                                <MDBListGroupItem noBorders className='px-1'>
                                    <p>2 morötter</p>
                                    <p>1 potatis (stor)</p>
                                    <p>1 gul lök</p>
                                    <p>2 klyftor vitlök</p>
                                    <p>3 cm färsk ingefära</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem active noBorders aria-current='true' className='px-3'>
                                    Moment
                                </MDBListGroupItem>
                                <MDBListGroupItem noBorders className='px-1'>
                                Skala och skär morötter, potatis, och lök i större bitar. Finhacka vitlök, ingefära och chili.
                                </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCollapse>
                        </MDBCardBody>
                        {/* Button to toggle collapse */}
                        <MDBBtn onClick={() => toggleCollapse('card1')}>Show</MDBBtn>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        {/* Card content */}
                        <MDBCardImage
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>

                       
                        {/* Collapse content */}
                        <MDBCollapse show={collapseStates.card2}>
                            <MDBListGroup style={{ minWidthL: '22rem' }} light>
                                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                                <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCollapse>
                         {/* Button to toggle collapse */}
                         <MDBBtn onClick={() => toggleCollapse('card2')}>Show</MDBBtn>

                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        {/* Card content */}
                        <MDBCardImage
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>

                        

                        {/* Collapse content */}
                        <MDBCollapse show={collapseStates.card3}>
                            <MDBListGroup style={{ minWidthL: '22rem' }} light>
                                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                                <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCollapse>
                        {/* Button to toggle collapse */}
                        <MDBBtn onClick={() => toggleCollapse('card3')}>Show</MDBBtn>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        {/* Card content */}
                        <MDBCardImage
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>

                        
                        {/* Collapse content */}
                        <MDBCollapse show={collapseStates.card4}>
                            <MDBListGroup style={{ minWidthL: '22rem' }} light>
                                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                                <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCollapse>
                        {/* Button to toggle collapse */}
                        <MDBBtn onClick={() => toggleCollapse('card4')}>Show</MDBBtn>

                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        {/* Card content */}
                        <MDBCardImage
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>


                        {/* Collapse content */}
                        <MDBCollapse show={collapseStates.card5}>
                            <MDBListGroup style={{ minWidthL: '22rem' }} light>
                                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                                <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCollapse>
                        
                        {/* Button to toggle collapse */}
                        <MDBBtn onClick={() => toggleCollapse('card5')}>Show</MDBBtn>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        {/* Card content */}
                        <MDBCardImage
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>


                        {/* Collapse content */}
                        <MDBCollapse show={collapseStates.card6}>
                            <MDBListGroup style={{ minWidthL: '22rem' }} light>
                                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                                <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCollapse>
                        
                        {/* Button to toggle collapse */}
                        <MDBBtn onClick={() => toggleCollapse('card6')}>Show</MDBBtn>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                        <MDBCardImage
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
                            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
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