import React from 'react';
import NewsList from './NewsList';
import { Container, Row, Col } from 'reactstrap';

const News = (props) => {

  return(
    <div className="container all-news">
      <Container>
        <Row>
          <Col md="8">
            <NewsList pathvar={props.pathValue} pathname={props.breadCrumbName} newslist={props.news} />
          </Col>
          <Col md="4">
            <div className="widget_wrap widget_all_page ">
              <iframe className="widget_frame" src="https://www.zomato.com/widgets/res_search_widget.php?entity_id=6&entity_type=city&city_id=6&theme=red&sort=popularity" border="0" frameborder="0"></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default News
