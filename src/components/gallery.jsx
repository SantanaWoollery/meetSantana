export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Projects</h2>
          <p>
            Here are a few of my current projects.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='https://www.google.com/'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h3>QuizIt - React Native App</h3>
                      <a
                        href='https://youtu.be/tqOhcK-mjHI'
                        className='btn btn-info btn-md page-scroll'
                      >
                        
                        <img
                          class='left'
                          src='img\portfolio\icons8-globe-24.png'
                          className='img-responsive'
                          alt='globe logo'
                        />
                        Demo
                      </a>{' '}
                      <a
                        href='https://github.com/SantanaWoollery/QuizIt'
                        className='btn btn-info btn-md page-scroll'
                      >
                        <img
                          class='left'
                          src='img\portfolio\icons8-github-24.png'
                          className='img-responsive'
                          alt='github logo'
                          
                        />
                        Code
                      </a>{' '}
                    </div>
                    <img
                      src='img\portfolio\QuizIt.jpg'
                      className='img-responsive'
                      alt='QuizIt App'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                  href='https://www.google.com/'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h3>J Mercer Marketing - React App</h3>
                      <a
                        href='https://jmercermarketing.netlify.app'
                        className='btn btn-info btn-md page-scroll'
                      >
                        
                        <img
                          class='left'
                          src='img\portfolio\icons8-globe-24.png'
                          className='img-responsive'
                          alt='globe logo'
                        />
                        Demo
                      </a>{' '}
                      <a
                        href='https://github.com/SantanaWoollery/JMercer-Project'
                        className='btn btn-info btn-md page-scroll'
                      >
                        <img
                          class='left'
                          src='img\portfolio\icons8-github-24.png'
                          className='img-responsive'
                          alt='github logo'
                          
                        />
                        Code
                      </a>{' '}
                    </div>
                    <img
                      src='img\portfolio\J Mercer Marketing.jpg'
                      className='img-responsive'
                      alt='J Mercer Marketing screenshot'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                  href='https://www.google.com/'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h3>nucampsite Back End - React App</h3>
                      <a
                        href='https://github.com/SantanaWoollery/nucampsiteServer/'
                        className='btn btn-info btn-md page-scroll'
                      >
                        <img
                          class='left'
                          src='img\portfolio\icons8-github-24.png'
                          className='img-responsive'
                          alt='github logo'
                          
                        />
                        Code
                      </a>{' '}
                    </div>
                    <img
                      src='img\portfolio\backEnd.jpg'
                      className='img-responsive'
                      alt='backEnd Project screenshot'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                  href='https://www.google.com/'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h3>meetSantana - React App</h3>
                      <a
                        href='https://meetsantana.netlify.app'
                        className='btn btn-info btn-md page-scroll'
                      >
                        
                        <img
                          class='left'
                          src='img\portfolio\icons8-globe-24.png'
                          className='img-responsive'
                          alt='globe logo'
                        />
                        Demo
                      </a>{' '}
                      <a
                        href='https://github.com/SantanaWoollery/meetSantana'
                        className='btn btn-info btn-md page-scroll'
                      >
                        <img
                          class='left'
                          src='img\portfolio\icons8-github-24.png'
                          className='img-responsive'
                          alt='github logo'
                        />
                        Code
                      </a>{' '}
                    </div>
                    <img
                      src='img\portfolio\meetSantana.jpg'
                      className='img-responsive'
                      alt='meetsantana project screenshot'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            {/*<div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/05-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h3>Adipiscing Elit</h3>
                      
                    </div>
                    <img
                      src='img/portfolio/05-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/06-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h3>Dolor Sit</h3>
                    </div>
                    <img
                      src='img/portfolio/06-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/07-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h3>Dolor Sit</h3>
                    </div>
                    <img
                      src='img/portfolio/07-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/08-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <img
                      src='img/portfolio/08-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/09-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h3>Adipiscing Elit</h3>
                    </div>
                    <img
                      src='img/portfolio/09-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  )
}
