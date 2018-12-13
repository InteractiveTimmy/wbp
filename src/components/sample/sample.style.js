const styles = theme => ( {
  sample: {
    transition: 'all 0.4s',
    backgroundColor: theme.bgc,
    color: theme.fgc,
    borderRadius: ( theme.rounded ) ? '1em' : '0',
    padding: '1em',
    marginTop: '0.8em',
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
    alignItems: 'center',
    "& a": { textDecoration: 'none' },
    "& a:link": { color: theme.fgc },
    "& a:visited": { color: theme.fgc },
    "& a:hover": { color: '#888' },
    "& a:active": { color: theme.fgc },
    "& :last-child": { marginBottom: '0.8em' }
  }
} );

export default styles;