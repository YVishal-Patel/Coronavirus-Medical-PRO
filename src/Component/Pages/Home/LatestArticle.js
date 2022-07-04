import React from 'react'
import '../Home/Home.css'
import ArticleCard from './Cards/ArticleCard/ArticleCard'
import mainImg from '/home/vishal/Desktop/weekend-app/src/Assets/img/add1.jpg'
 import image from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm2-7.jpg'
 import img from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm-9.jpg'
 import img1 from '/home/vishal/Desktop/weekend-app/src/Assets/img/sm-8.jpg'
 import help from '/home/vishal/Desktop/weekend-app/src/Assets/img/help.jpg'
 import ar1 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-1.jpg'
 import ar2 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-2.jpg'
 import ar3 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-3.jpg'
 import ar4 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-4.jpg'
 import ar5 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-5.jpg'
 import ar6 from '/home/vishal/Desktop/weekend-app/src/Assets/img/ar-6.jpg'
 import skel from '/home/vishal/Desktop/weekend-app/src/Assets/img/skel.jpg'

function LatestArticle() {
  return (
      <>
      <div className="container">
          <div className="articles">
              <div className="d-flex justify-content-center">
                  <p className='article-heading'>Latest Article</p>
              </div>
              <div className="row">
                  <div className="col-3">
                      <ArticleCard img={ar6} />
                  </div>
                  <div className="col-3">
                  <ArticleCard img={img1} />
                  </div>
                  <div className="col-3">
                  <ArticleCard img={help} />
                  </div>
                  <div className="col-3">
                  <ArticleCard img={ar1} />
                  </div>
                  <div className="col-3">
                  <ArticleCard img={ar2} />
                  </div>
                  <div className="col-3">
                  <ArticleCard img={ar3} />
                  </div>
                  <div className="col-3">
                  <ArticleCard img={ar4} />
                  </div>
                  <div className="col-3">
                  <ArticleCard img={ar5} />
                  </div>
                  
              </div>
          </div>
      </div>
      </>
  )
}

export default LatestArticle