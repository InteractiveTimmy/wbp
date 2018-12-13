const styles = theme => ( {
  sample: {
    backgroundColor: theme.bgc,
    color: theme.fgc,
    borderRadius: ( theme.rounded ) ? '0.4em' : '0',
    padding: '1em',
    margin: '0.4em',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sampleContainer: {
    flexBasis: 1,
    flexGrow: 0,
    flexShrink: 0,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
} );

export default styles;