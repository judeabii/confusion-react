import React,{ Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Detail extends Component {

renderComment(dish)
{
	if(dish==null)
	{
		return(
			<div></div>
			)
	}
	else
	{
		const menu=dish.comments.map((fish) => {
			return(
				<li key>
					<p>{fish.comment}</p>
					<p>--{fish.author},
					 {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(fish.date))}
					</p>
				</li>
			)
		})
		return(
			<div className="col-12 col-md-5 m-1">
				<h4>Comments</h4>
				<ul className="list-unstyled">
					{menu}
				</ul>
			</div>
		)			

	}
}

	
 renderDish(dish) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    render() {
        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem = this.renderDish(dish)
        const comm=this.renderComment(dish)
        return (
        <div className="container">
            <div className='row'>
                {dishItem}
                {comm}
            </div>
            </div>
        )

    }
}

export default Detail
