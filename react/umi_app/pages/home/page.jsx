import React, { Component } from 'react';
import router from 'umi/router';
import { StickyContainer, Sticky } from 'react-sticky';
import { SearchBar, Grid, ListView } from 'antd-mobile';
import * as styles from './page.less';

export default class extends Component {
  constructor (props) {
    super(props);
    // 将路由重定向至/home
    // http://www.baidu.com:3000/product/:id?a=1&b=2
    if (window.location.pathname.indexOf('/home') < 0) {
      router.replace('/home');
      return;
    }
  }

  state = {
    address: '当前地址',
    coords: {},
    rank_id: '',
    isLoading: false 
  }

  rets = []

  dataSource = new ListView.DataSource({
    rowHasChanged:(row1, row2) => row1 != row2
  });

  componentDidMount() {
    // alert()
    
    // console.log('getCurrentPosition error',err);
    this.state.coords = {
      latitude: '30.27697500000001',
      longitude: '120.1213009'
    };
    this.init(this.state.coords);
  }

  init (coords) {
    this.loadTypeData(coords);
    this.loadPoiData(coords);
    this.loadRestaurantData(coords);
  }

  loadTypeData ({ latitude, longitude}) {
    fetch("https://www.easy-mock.com/mock/5b62c4693469e27da6596a87/https:/www.easy-mock.com/1")
      .then(res => {
        if (res.status === 200) {
          res.json().then(data => {
            this.setState({
              headerData: data
            })
          })
        }
      })
      .catch(err =>  {
        console.warn(err)
      })
    // console.log(latitude, longitude);
  }
  loadPoiData ({ latitude, longitude}) {
    // 请求代理, 代替组件向某接口发送请求 
    fetch("https://www.easy-mock.com/mock/5b62c4693469e27da6596a87/https:/www.easy-mock.com/")
      .then(res => {
        if (res.status === 200) {
          
          res.json().then(data => {
            console.log(data)
            this.setState({
              address: data.data.name
            })
          })
        }
      })
      .catch(err => {
        console.warn(err)
      })
  }
  loadRestaurantData ({ latitude, longitude}, rank_id="") {

  }

  render () {
    const {address} = this.state
    return (
      <div className={styles.home}>
        <header className={styles.header}>
          <div>
          <svg viewBox="0 0 26 31" id="location" width="28px" height="34px"><path fill="#FFF" fillRule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
            &nbsp;
            {address}
          </div>
        </header>
        <StickyContainer>
          <Sticky>
            {
              ({ style }) => (
                  <div style={{...style, zIndex: 1, height: '1.2rem', overflow: 'hidden'}}>
                    <SearchBar 
                      placeholder="搜索商家、商品名称"
                      className={styles.search}
                      onSubmit={this.onSearch}/>
                  </div>
              )
            }
          </Sticky>
          <section className={styles.toptoon}>
            <img src="https://fuss10.elemecdn.com/0/cf/e16c1687a4ea84674d5b531623934png.png?imageMogr/format/webp/thumbnail/!750x210r/gravity/Center/crop/750x210/" alt=""/>
          </section>
          <Grid
            className={styles.grid}
            data={this.getTypeData()}
            columnNum={5}
            carouselMaxRow={2}
            hasLine={false}
            activeStyle={false}
            isCarousel
            renderItem={(item) => (
              <div className={styles.typeItem}>
                <div>
                  <img src={item.icon} alt={item.text}/>
                </div>
                <div className={styles.text}>
                {item.text}
                </div>
              </div>
            )}
          >
          </Grid>
          <div className={styles.ad}>
            <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" alt="ad" />
          </div>
          <div className={styles.sep}>
            <div className={styles.seph}></div>
            推荐商家
            <div className={styles.seph}></div>
          </div>
          <ListView
            dataSource={this.dataSource}
            renderFooter={() => (<div style={{padding: 30, textAlign: 'center'}}>
            {this.state.isLoading ? '加载中...' : '暂无更多'}
            </div>)}
            renderRow={this.renderRow}
            pageSize={4}
            useBodyScroll
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
          />
        </StickyContainer>

      </div>
    )
  }

  renderRow = (rowData, sectionID, rowID) => {
    return (
      <div>row</div>
    )
  }

  onEndReached = () => {
    
  }

  getTypeData = () => {
    try {
      return this.state.headerData[0].entries.map(type => ({
        icon: this.getImage(type.image_hash),
        text: type.name
      }))
    } catch(e) {
      return [];
    }
  }

  getImage(hash) {
    const path = hash[0] + '/'
      + hash.substr(1, 2) + '/'
      + hash.substr(3);
    let type = 'jpeg';
    if (path.indexOf('png') > -1) {
      type = 'png';
    }
    return `http://fuss10.elemecdn.com/${path}.${type}`;
  }

  onSearch = (value) => {
    console.log('onSearch', value);
  }
}