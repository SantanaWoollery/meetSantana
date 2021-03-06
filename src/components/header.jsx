export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='img\Woollery Resume.pdf' target='_blank' rel='noreferrer'
                  title='Woollery Résumé'
                  data-lightbox-gallery='gallery1'
                  className='btn btn-info btn-lg page-scroll'
                >
                  See My Résumé
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
