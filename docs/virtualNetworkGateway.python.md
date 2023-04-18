# `azurestack_virtual_network_gateway`

Refer to the Terraform Registory for docs: [`azurestack_virtual_network_gateway`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway).

# `virtualNetworkGateway` Submodule <a name="`virtualNetworkGateway` Submodule" id="@cdktf/provider-azurestack.virtualNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkGateway <a name="VirtualNetworkGateway" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway azurestack_virtual_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_configuration: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]],
  location: str,
  name: str,
  resource_group_name: str,
  sku: str,
  type: str,
  active_active: typing.Union[bool, IResolvable] = None,
  bgp_settings: VirtualNetworkGatewayBgpSettings = None,
  default_local_network_gateway_id: str = None,
  enable_bgp: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualNetworkGatewayTimeouts = None,
  vpn_client_configuration: VirtualNetworkGatewayVpnClientConfiguration = None,
  vpn_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.ipConfiguration">ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.activeActive">active_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.defaultLocalNetworkGatewayId">default_local_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.enableBgp">enable_bgp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnClientConfiguration">vpn_client_configuration</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | vpn_client_configuration block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnType">vpn_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.ipConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#ip_configuration VirtualNetworkGateway#ip_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}.

---

##### `active_active`<sup>Optional</sup> <a name="active_active" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.activeActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}.

---

##### `bgp_settings`<sup>Optional</sup> <a name="bgp_settings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.bgpSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#bgp_settings VirtualNetworkGateway#bgp_settings}

---

##### `default_local_network_gateway_id`<sup>Optional</sup> <a name="default_local_network_gateway_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.defaultLocalNetworkGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}.

---

##### `enable_bgp`<sup>Optional</sup> <a name="enable_bgp" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.enableBgp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#timeouts VirtualNetworkGateway#timeouts}

---

##### `vpn_client_configuration`<sup>Optional</sup> <a name="vpn_client_configuration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnClientConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

vpn_client_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_configuration VirtualNetworkGateway#vpn_client_configuration}

---

##### `vpn_type`<sup>Optional</sup> <a name="vpn_type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings">put_bgp_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putIpConfiguration">put_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration">put_vpn_client_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetActiveActive">reset_active_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetBgpSettings">reset_bgp_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetDefaultLocalNetworkGatewayId">reset_default_local_network_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetEnableBgp">reset_enable_bgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetVpnClientConfiguration">reset_vpn_client_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetVpnType">reset_vpn_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_bgp_settings` <a name="put_bgp_settings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings"></a>

```python
def put_bgp_settings(
  asn: typing.Union[int, float] = None,
  peering_address: str = None,
  peer_weight: typing.Union[int, float] = None
) -> None
```

###### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings.parameter.asn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#asn VirtualNetworkGateway#asn}.

---

###### `peering_address`<sup>Optional</sup> <a name="peering_address" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings.parameter.peeringAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peering_address VirtualNetworkGateway#peering_address}.

---

###### `peer_weight`<sup>Optional</sup> <a name="peer_weight" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings.parameter.peerWeight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peer_weight VirtualNetworkGateway#peer_weight}.

---

##### `put_ip_configuration` <a name="put_ip_configuration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putIpConfiguration"></a>

```python
def put_ip_configuration(
  value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putIpConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#create VirtualNetworkGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#delete VirtualNetworkGateway#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#read VirtualNetworkGateway#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#update VirtualNetworkGateway#update}.

---

##### `put_vpn_client_configuration` <a name="put_vpn_client_configuration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration"></a>

```python
def put_vpn_client_configuration(
  address_space: typing.List[str],
  radius_server_address: str = None,
  radius_server_secret: str = None,
  revoked_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]] = None,
  root_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]] = None,
  vpn_client_protocols: typing.List[str] = None
) -> None
```

###### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.addressSpace"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#address_space VirtualNetworkGateway#address_space}.

---

###### `radius_server_address`<sup>Optional</sup> <a name="radius_server_address" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.radiusServerAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_address VirtualNetworkGateway#radius_server_address}.

---

###### `radius_server_secret`<sup>Optional</sup> <a name="radius_server_secret" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.radiusServerSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_secret VirtualNetworkGateway#radius_server_secret}.

---

###### `revoked_certificate`<sup>Optional</sup> <a name="revoked_certificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.revokedCertificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]

revoked_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#revoked_certificate VirtualNetworkGateway#revoked_certificate}

---

###### `root_certificate`<sup>Optional</sup> <a name="root_certificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.rootCertificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]

root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#root_certificate VirtualNetworkGateway#root_certificate}

---

###### `vpn_client_protocols`<sup>Optional</sup> <a name="vpn_client_protocols" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.vpnClientProtocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}.

---

##### `reset_active_active` <a name="reset_active_active" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetActiveActive"></a>

```python
def reset_active_active() -> None
```

##### `reset_bgp_settings` <a name="reset_bgp_settings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetBgpSettings"></a>

```python
def reset_bgp_settings() -> None
```

##### `reset_default_local_network_gateway_id` <a name="reset_default_local_network_gateway_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetDefaultLocalNetworkGatewayId"></a>

```python
def reset_default_local_network_gateway_id() -> None
```

##### `reset_enable_bgp` <a name="reset_enable_bgp" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetEnableBgp"></a>

```python
def reset_enable_bgp() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpn_client_configuration` <a name="reset_vpn_client_configuration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetVpnClientConfiguration"></a>

```python
def reset_vpn_client_configuration() -> None
```

##### `reset_vpn_type` <a name="reset_vpn_type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetVpnType"></a>

```python
def reset_vpn_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGateway.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference">VirtualNetworkGatewayBgpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList">VirtualNetworkGatewayIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference">VirtualNetworkGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfiguration">vpn_client_configuration</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference">VirtualNetworkGatewayVpnClientConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.activeActiveInput">active_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettingsInput">bgp_settings_input</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayIdInput">default_local_network_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgpInput">enable_bgp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfigurationInput">ip_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfigurationInput">vpn_client_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnTypeInput">vpn_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.activeActive">active_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayId">default_local_network_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgp">enable_bgp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnType">vpn_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bgp_settings`<sup>Required</sup> <a name="bgp_settings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettings"></a>

```python
bgp_settings: VirtualNetworkGatewayBgpSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference">VirtualNetworkGatewayBgpSettingsOutputReference</a>

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfiguration"></a>

```python
ip_configuration: VirtualNetworkGatewayIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList">VirtualNetworkGatewayIpConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.timeouts"></a>

```python
timeouts: VirtualNetworkGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference">VirtualNetworkGatewayTimeoutsOutputReference</a>

---

##### `vpn_client_configuration`<sup>Required</sup> <a name="vpn_client_configuration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfiguration"></a>

```python
vpn_client_configuration: VirtualNetworkGatewayVpnClientConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference">VirtualNetworkGatewayVpnClientConfigurationOutputReference</a>

---

##### `active_active_input`<sup>Optional</sup> <a name="active_active_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.activeActiveInput"></a>

```python
active_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bgp_settings_input`<sup>Optional</sup> <a name="bgp_settings_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettingsInput"></a>

```python
bgp_settings_input: VirtualNetworkGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

---

##### `default_local_network_gateway_id_input`<sup>Optional</sup> <a name="default_local_network_gateway_id_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayIdInput"></a>

```python
default_local_network_gateway_id_input: str
```

- *Type:* str

---

##### `enable_bgp_input`<sup>Optional</sup> <a name="enable_bgp_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgpInput"></a>

```python
enable_bgp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_configuration_input`<sup>Optional</sup> <a name="ip_configuration_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfigurationInput"></a>

```python
ip_configuration_input: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VirtualNetworkGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpn_client_configuration_input`<sup>Optional</sup> <a name="vpn_client_configuration_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfigurationInput"></a>

```python
vpn_client_configuration_input: VirtualNetworkGatewayVpnClientConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

---

##### `vpn_type_input`<sup>Optional</sup> <a name="vpn_type_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnTypeInput"></a>

```python
vpn_type_input: str
```

- *Type:* str

---

##### `active_active`<sup>Required</sup> <a name="active_active" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.activeActive"></a>

```python
active_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_local_network_gateway_id`<sup>Required</sup> <a name="default_local_network_gateway_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayId"></a>

```python
default_local_network_gateway_id: str
```

- *Type:* str

---

##### `enable_bgp`<sup>Required</sup> <a name="enable_bgp" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgp"></a>

```python
enable_bgp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpn_type`<sup>Required</sup> <a name="vpn_type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnType"></a>

```python
vpn_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkGatewayBgpSettings <a name="VirtualNetworkGatewayBgpSettings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayBgpSettings(
  asn: typing.Union[int, float] = None,
  peering_address: str = None,
  peer_weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#asn VirtualNetworkGateway#asn}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peeringAddress">peering_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peering_address VirtualNetworkGateway#peering_address}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peerWeight">peer_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peer_weight VirtualNetworkGateway#peer_weight}. |

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#asn VirtualNetworkGateway#asn}.

---

##### `peering_address`<sup>Optional</sup> <a name="peering_address" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peeringAddress"></a>

```python
peering_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peering_address VirtualNetworkGateway#peering_address}.

---

##### `peer_weight`<sup>Optional</sup> <a name="peer_weight" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peerWeight"></a>

```python
peer_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peer_weight VirtualNetworkGateway#peer_weight}.

---

### VirtualNetworkGatewayConfig <a name="VirtualNetworkGatewayConfig" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_configuration: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]],
  location: str,
  name: str,
  resource_group_name: str,
  sku: str,
  type: str,
  active_active: typing.Union[bool, IResolvable] = None,
  bgp_settings: VirtualNetworkGatewayBgpSettings = None,
  default_local_network_gateway_id: str = None,
  enable_bgp: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualNetworkGatewayTimeouts = None,
  vpn_client_configuration: VirtualNetworkGatewayVpnClientConfiguration = None,
  vpn_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.ipConfiguration">ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.activeActive">active_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.defaultLocalNetworkGatewayId">default_local_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.enableBgp">enable_bgp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnClientConfiguration">vpn_client_configuration</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | vpn_client_configuration block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnType">vpn_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.ipConfiguration"></a>

```python
ip_configuration: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#ip_configuration VirtualNetworkGateway#ip_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}.

---

##### `active_active`<sup>Optional</sup> <a name="active_active" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.activeActive"></a>

```python
active_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}.

---

##### `bgp_settings`<sup>Optional</sup> <a name="bgp_settings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.bgpSettings"></a>

```python
bgp_settings: VirtualNetworkGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#bgp_settings VirtualNetworkGateway#bgp_settings}

---

##### `default_local_network_gateway_id`<sup>Optional</sup> <a name="default_local_network_gateway_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.defaultLocalNetworkGatewayId"></a>

```python
default_local_network_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}.

---

##### `enable_bgp`<sup>Optional</sup> <a name="enable_bgp" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.enableBgp"></a>

```python
enable_bgp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.timeouts"></a>

```python
timeouts: VirtualNetworkGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#timeouts VirtualNetworkGateway#timeouts}

---

##### `vpn_client_configuration`<sup>Optional</sup> <a name="vpn_client_configuration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnClientConfiguration"></a>

```python
vpn_client_configuration: VirtualNetworkGatewayVpnClientConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

vpn_client_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_configuration VirtualNetworkGateway#vpn_client_configuration}

---

##### `vpn_type`<sup>Optional</sup> <a name="vpn_type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnType"></a>

```python
vpn_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}.

---

### VirtualNetworkGatewayIpConfiguration <a name="VirtualNetworkGatewayIpConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration(
  public_ip_address_id: str,
  subnet_id: str,
  name: str = None,
  private_ip_address_allocation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#public_ip_address_id VirtualNetworkGateway#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#subnet_id VirtualNetworkGateway#subnet_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.privateIpAddressAllocation">private_ip_address_allocation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#private_ip_address_allocation VirtualNetworkGateway#private_ip_address_allocation}. |

---

##### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#public_ip_address_id VirtualNetworkGateway#public_ip_address_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#subnet_id VirtualNetworkGateway#subnet_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `private_ip_address_allocation`<sup>Optional</sup> <a name="private_ip_address_allocation" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.privateIpAddressAllocation"></a>

```python
private_ip_address_allocation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#private_ip_address_allocation VirtualNetworkGateway#private_ip_address_allocation}.

---

### VirtualNetworkGatewayTimeouts <a name="VirtualNetworkGatewayTimeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#create VirtualNetworkGateway#create}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#delete VirtualNetworkGateway#delete}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#read VirtualNetworkGateway#read}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#update VirtualNetworkGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#create VirtualNetworkGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#delete VirtualNetworkGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#read VirtualNetworkGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#update VirtualNetworkGateway#update}.

---

### VirtualNetworkGatewayVpnClientConfiguration <a name="VirtualNetworkGatewayVpnClientConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration(
  address_space: typing.List[str],
  radius_server_address: str = None,
  radius_server_secret: str = None,
  revoked_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]] = None,
  root_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]] = None,
  vpn_client_protocols: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.addressSpace">address_space</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#address_space VirtualNetworkGateway#address_space}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerAddress">radius_server_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_address VirtualNetworkGateway#radius_server_address}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerSecret">radius_server_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_secret VirtualNetworkGateway#radius_server_secret}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.revokedCertificate">revoked_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]</code> | revoked_certificate block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.rootCertificate">root_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]</code> | root_certificate block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.vpnClientProtocols">vpn_client_protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}. |

---

##### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.addressSpace"></a>

```python
address_space: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#address_space VirtualNetworkGateway#address_space}.

---

##### `radius_server_address`<sup>Optional</sup> <a name="radius_server_address" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerAddress"></a>

```python
radius_server_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_address VirtualNetworkGateway#radius_server_address}.

---

##### `radius_server_secret`<sup>Optional</sup> <a name="radius_server_secret" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerSecret"></a>

```python
radius_server_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_secret VirtualNetworkGateway#radius_server_secret}.

---

##### `revoked_certificate`<sup>Optional</sup> <a name="revoked_certificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.revokedCertificate"></a>

```python
revoked_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]

revoked_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#revoked_certificate VirtualNetworkGateway#revoked_certificate}

---

##### `root_certificate`<sup>Optional</sup> <a name="root_certificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.rootCertificate"></a>

```python
root_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]

root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#root_certificate VirtualNetworkGateway#root_certificate}

---

##### `vpn_client_protocols`<sup>Optional</sup> <a name="vpn_client_protocols" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.vpnClientProtocols"></a>

```python
vpn_client_protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}.

---

### VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate <a name="VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate(
  name: str,
  thumbprint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.thumbprint">thumbprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#thumbprint VirtualNetworkGateway#thumbprint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#thumbprint VirtualNetworkGateway#thumbprint}.

---

### VirtualNetworkGatewayVpnClientConfigurationRootCertificate <a name="VirtualNetworkGatewayVpnClientConfigurationRootCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate(
  name: str,
  public_cert_data: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.publicCertData">public_cert_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#public_cert_data VirtualNetworkGateway#public_cert_data}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `public_cert_data`<sup>Required</sup> <a name="public_cert_data" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.publicCertData"></a>

```python
public_cert_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#public_cert_data VirtualNetworkGateway#public_cert_data}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkGatewayBgpSettingsOutputReference <a name="VirtualNetworkGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetAsn">reset_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeeringAddress">reset_peering_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeerWeight">reset_peer_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_asn` <a name="reset_asn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetAsn"></a>

```python
def reset_asn() -> None
```

##### `reset_peering_address` <a name="reset_peering_address" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeeringAddress"></a>

```python
def reset_peering_address() -> None
```

##### `reset_peer_weight` <a name="reset_peer_weight" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeerWeight"></a>

```python
def reset_peer_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asnInput">asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddressInput">peering_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeightInput">peer_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddress">peering_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeight">peer_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asnInput"></a>

```python
asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peering_address_input`<sup>Optional</sup> <a name="peering_address_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddressInput"></a>

```python
peering_address_input: str
```

- *Type:* str

---

##### `peer_weight_input`<sup>Optional</sup> <a name="peer_weight_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeightInput"></a>

```python
peer_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peering_address`<sup>Required</sup> <a name="peering_address" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddress"></a>

```python
peering_address: str
```

- *Type:* str

---

##### `peer_weight`<sup>Required</sup> <a name="peer_weight" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```python
peer_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: VirtualNetworkGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

---


### VirtualNetworkGatewayIpConfigurationList <a name="VirtualNetworkGatewayIpConfigurationList" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualNetworkGatewayIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]

---


### VirtualNetworkGatewayIpConfigurationOutputReference <a name="VirtualNetworkGatewayIpConfigurationOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetPrivateIpAddressAllocation">reset_private_ip_address_allocation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_private_ip_address_allocation` <a name="reset_private_ip_address_allocation" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetPrivateIpAddressAllocation"></a>

```python
def reset_private_ip_address_allocation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocationInput">private_ip_address_allocation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressIdInput">public_ip_address_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocation">private_ip_address_allocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_ip_address_allocation_input`<sup>Optional</sup> <a name="private_ip_address_allocation_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocationInput"></a>

```python
private_ip_address_allocation_input: str
```

- *Type:* str

---

##### `public_ip_address_id_input`<sup>Optional</sup> <a name="public_ip_address_id_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressIdInput"></a>

```python
public_ip_address_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip_address_allocation`<sup>Required</sup> <a name="private_ip_address_allocation" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocation"></a>

```python
private_ip_address_allocation: str
```

- *Type:* str

---

##### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VirtualNetworkGatewayIpConfiguration, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>, cdktf.IResolvable]

---


### VirtualNetworkGatewayTimeoutsOutputReference <a name="VirtualNetworkGatewayTimeoutsOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VirtualNetworkGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>, cdktf.IResolvable]

---


### VirtualNetworkGatewayVpnClientConfigurationOutputReference <a name="VirtualNetworkGatewayVpnClientConfigurationOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRevokedCertificate">put_revoked_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRootCertificate">put_root_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerAddress">reset_radius_server_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerSecret">reset_radius_server_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRevokedCertificate">reset_revoked_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRootCertificate">reset_root_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetVpnClientProtocols">reset_vpn_client_protocols</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_revoked_certificate` <a name="put_revoked_certificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRevokedCertificate"></a>

```python
def put_revoked_certificate(
  value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRevokedCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]

---

##### `put_root_certificate` <a name="put_root_certificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRootCertificate"></a>

```python
def put_root_certificate(
  value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRootCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]

---

##### `reset_radius_server_address` <a name="reset_radius_server_address" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerAddress"></a>

```python
def reset_radius_server_address() -> None
```

##### `reset_radius_server_secret` <a name="reset_radius_server_secret" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerSecret"></a>

```python
def reset_radius_server_secret() -> None
```

##### `reset_revoked_certificate` <a name="reset_revoked_certificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRevokedCertificate"></a>

```python
def reset_revoked_certificate() -> None
```

##### `reset_root_certificate` <a name="reset_root_certificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRootCertificate"></a>

```python
def reset_root_certificate() -> None
```

##### `reset_vpn_client_protocols` <a name="reset_vpn_client_protocols" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetVpnClientProtocols"></a>

```python
def reset_vpn_client_protocols() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificate">revoked_certificate</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificate">root_certificate</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList">VirtualNetworkGatewayVpnClientConfigurationRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpaceInput">address_space_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddressInput">radius_server_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecretInput">radius_server_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificateInput">revoked_certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificateInput">root_certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocolsInput">vpn_client_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpace">address_space</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddress">radius_server_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecret">radius_server_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocols">vpn_client_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revoked_certificate`<sup>Required</sup> <a name="revoked_certificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificate"></a>

```python
revoked_certificate: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList</a>

---

##### `root_certificate`<sup>Required</sup> <a name="root_certificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificate"></a>

```python
root_certificate: VirtualNetworkGatewayVpnClientConfigurationRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList">VirtualNetworkGatewayVpnClientConfigurationRootCertificateList</a>

---

##### `address_space_input`<sup>Optional</sup> <a name="address_space_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpaceInput"></a>

```python
address_space_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `radius_server_address_input`<sup>Optional</sup> <a name="radius_server_address_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddressInput"></a>

```python
radius_server_address_input: str
```

- *Type:* str

---

##### `radius_server_secret_input`<sup>Optional</sup> <a name="radius_server_secret_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecretInput"></a>

```python
radius_server_secret_input: str
```

- *Type:* str

---

##### `revoked_certificate_input`<sup>Optional</sup> <a name="revoked_certificate_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificateInput"></a>

```python
revoked_certificate_input: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]

---

##### `root_certificate_input`<sup>Optional</sup> <a name="root_certificate_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificateInput"></a>

```python
root_certificate_input: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]

---

##### `vpn_client_protocols_input`<sup>Optional</sup> <a name="vpn_client_protocols_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocolsInput"></a>

```python
vpn_client_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpace"></a>

```python
address_space: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `radius_server_address`<sup>Required</sup> <a name="radius_server_address" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddress"></a>

```python
radius_server_address: str
```

- *Type:* str

---

##### `radius_server_secret`<sup>Required</sup> <a name="radius_server_secret" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecret"></a>

```python
radius_server_secret: str
```

- *Type:* str

---

##### `vpn_client_protocols`<sup>Required</sup> <a name="vpn_client_protocols" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocols"></a>

```python
vpn_client_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: VirtualNetworkGatewayVpnClientConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

---


### VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList <a name="VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]

---


### VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference <a name="VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprintInput">thumbprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `thumbprint_input`<sup>Optional</sup> <a name="thumbprint_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprintInput"></a>

```python
thumbprint_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>, cdktf.IResolvable]

---


### VirtualNetworkGatewayVpnClientConfigurationRootCertificateList <a name="VirtualNetworkGatewayVpnClientConfigurationRootCertificateList" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]

---


### VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference <a name="VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertDataInput">public_cert_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertData">public_cert_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_cert_data_input`<sup>Optional</sup> <a name="public_cert_data_input" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertDataInput"></a>

```python
public_cert_data_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_cert_data`<sup>Required</sup> <a name="public_cert_data" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertData"></a>

```python
public_cert_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VirtualNetworkGatewayVpnClientConfigurationRootCertificate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>, cdktf.IResolvable]

---



