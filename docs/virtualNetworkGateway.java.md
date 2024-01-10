# `virtualNetworkGateway` Submodule <a name="`virtualNetworkGateway` Submodule" id="@cdktf/provider-azurestack.virtualNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkGateway <a name="VirtualNetworkGateway" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway azurestack_virtual_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGateway;

VirtualNetworkGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .ipConfiguration(IResolvable)
    .ipConfiguration(java.util.List<VirtualNetworkGatewayIpConfiguration>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sku(java.lang.String)
    .type(java.lang.String)
//  .activeActive(java.lang.Boolean)
//  .activeActive(IResolvable)
//  .bgpSettings(VirtualNetworkGatewayBgpSettings)
//  .defaultLocalNetworkGatewayId(java.lang.String)
//  .enableBgp(java.lang.Boolean)
//  .enableBgp(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualNetworkGatewayTimeouts)
//  .vpnClientConfiguration(VirtualNetworkGatewayVpnClientConfiguration)
//  .vpnType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.ipConfiguration">ipConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.activeActive">activeActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.bgpSettings">bgpSettings</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.defaultLocalNetworkGatewayId">defaultLocalNetworkGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.enableBgp">enableBgp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnClientConfiguration">vpnClientConfiguration</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | vpn_client_configuration block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnType">vpnType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.ipConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#ip_configuration VirtualNetworkGateway#ip_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}.

---

##### `activeActive`<sup>Optional</sup> <a name="activeActive" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.activeActive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}.

---

##### `bgpSettings`<sup>Optional</sup> <a name="bgpSettings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.bgpSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#bgp_settings VirtualNetworkGateway#bgp_settings}

---

##### `defaultLocalNetworkGatewayId`<sup>Optional</sup> <a name="defaultLocalNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.defaultLocalNetworkGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}.

---

##### `enableBgp`<sup>Optional</sup> <a name="enableBgp" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.enableBgp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#timeouts VirtualNetworkGateway#timeouts}

---

##### `vpnClientConfiguration`<sup>Optional</sup> <a name="vpnClientConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnClientConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

vpn_client_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_configuration VirtualNetworkGateway#vpn_client_configuration}

---

##### `vpnType`<sup>Optional</sup> <a name="vpnType" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings">putBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putIpConfiguration">putIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration">putVpnClientConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetActiveActive">resetActiveActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetBgpSettings">resetBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetDefaultLocalNetworkGatewayId">resetDefaultLocalNetworkGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetEnableBgp">resetEnableBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetVpnClientConfiguration">resetVpnClientConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetVpnType">resetVpnType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpSettings` <a name="putBgpSettings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings"></a>

```java
public void putBgpSettings(VirtualNetworkGatewayBgpSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

---

##### `putIpConfiguration` <a name="putIpConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putIpConfiguration"></a>

```java
public void putIpConfiguration(IResolvable OR java.util.List<VirtualNetworkGatewayIpConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putIpConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts"></a>

```java
public void putTimeouts(VirtualNetworkGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>

---

##### `putVpnClientConfiguration` <a name="putVpnClientConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration"></a>

```java
public void putVpnClientConfiguration(VirtualNetworkGatewayVpnClientConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

---

##### `resetActiveActive` <a name="resetActiveActive" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetActiveActive"></a>

```java
public void resetActiveActive()
```

##### `resetBgpSettings` <a name="resetBgpSettings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetBgpSettings"></a>

```java
public void resetBgpSettings()
```

##### `resetDefaultLocalNetworkGatewayId` <a name="resetDefaultLocalNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetDefaultLocalNetworkGatewayId"></a>

```java
public void resetDefaultLocalNetworkGatewayId()
```

##### `resetEnableBgp` <a name="resetEnableBgp" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetEnableBgp"></a>

```java
public void resetEnableBgp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpnClientConfiguration` <a name="resetVpnClientConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetVpnClientConfiguration"></a>

```java
public void resetVpnClientConfiguration()
```

##### `resetVpnType` <a name="resetVpnType" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.resetVpnType"></a>

```java
public void resetVpnType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualNetworkGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGateway;

VirtualNetworkGateway.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGateway;

VirtualNetworkGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGateway;

VirtualNetworkGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGateway;

VirtualNetworkGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualNetworkGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualNetworkGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualNetworkGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettings">bgpSettings</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference">VirtualNetworkGatewayBgpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList">VirtualNetworkGatewayIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference">VirtualNetworkGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfiguration">vpnClientConfiguration</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference">VirtualNetworkGatewayVpnClientConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.activeActiveInput">activeActiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettingsInput">bgpSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayIdInput">defaultLocalNetworkGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgpInput">enableBgpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfigurationInput">vpnClientConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnTypeInput">vpnTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.activeActive">activeActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayId">defaultLocalNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgp">enableBgp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnType">vpnType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bgpSettings`<sup>Required</sup> <a name="bgpSettings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettings"></a>

```java
public VirtualNetworkGatewayBgpSettingsOutputReference getBgpSettings();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference">VirtualNetworkGatewayBgpSettingsOutputReference</a>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfiguration"></a>

```java
public VirtualNetworkGatewayIpConfigurationList getIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList">VirtualNetworkGatewayIpConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.timeouts"></a>

```java
public VirtualNetworkGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference">VirtualNetworkGatewayTimeoutsOutputReference</a>

---

##### `vpnClientConfiguration`<sup>Required</sup> <a name="vpnClientConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfiguration"></a>

```java
public VirtualNetworkGatewayVpnClientConfigurationOutputReference getVpnClientConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference">VirtualNetworkGatewayVpnClientConfigurationOutputReference</a>

---

##### `activeActiveInput`<sup>Optional</sup> <a name="activeActiveInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.activeActiveInput"></a>

```java
public java.lang.Object getActiveActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bgpSettingsInput`<sup>Optional</sup> <a name="bgpSettingsInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettingsInput"></a>

```java
public VirtualNetworkGatewayBgpSettings getBgpSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

---

##### `defaultLocalNetworkGatewayIdInput`<sup>Optional</sup> <a name="defaultLocalNetworkGatewayIdInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayIdInput"></a>

```java
public java.lang.String getDefaultLocalNetworkGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `enableBgpInput`<sup>Optional</sup> <a name="enableBgpInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgpInput"></a>

```java
public java.lang.Object getEnableBgpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfigurationInput"></a>

```java
public java.lang.Object getIpConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpnClientConfigurationInput`<sup>Optional</sup> <a name="vpnClientConfigurationInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfigurationInput"></a>

```java
public VirtualNetworkGatewayVpnClientConfiguration getVpnClientConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

---

##### `vpnTypeInput`<sup>Optional</sup> <a name="vpnTypeInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnTypeInput"></a>

```java
public java.lang.String getVpnTypeInput();
```

- *Type:* java.lang.String

---

##### `activeActive`<sup>Required</sup> <a name="activeActive" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.activeActive"></a>

```java
public java.lang.Object getActiveActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultLocalNetworkGatewayId`<sup>Required</sup> <a name="defaultLocalNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayId"></a>

```java
public java.lang.String getDefaultLocalNetworkGatewayId();
```

- *Type:* java.lang.String

---

##### `enableBgp`<sup>Required</sup> <a name="enableBgp" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgp"></a>

```java
public java.lang.Object getEnableBgp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpnType`<sup>Required</sup> <a name="vpnType" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.vpnType"></a>

```java
public java.lang.String getVpnType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkGatewayBgpSettings <a name="VirtualNetworkGatewayBgpSettings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayBgpSettings;

VirtualNetworkGatewayBgpSettings.builder()
//  .asn(java.lang.Number)
//  .peeringAddress(java.lang.String)
//  .peerWeight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.asn">asn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#asn VirtualNetworkGateway#asn}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peeringAddress">peeringAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peering_address VirtualNetworkGateway#peering_address}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peerWeight">peerWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peer_weight VirtualNetworkGateway#peer_weight}. |

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#asn VirtualNetworkGateway#asn}.

---

##### `peeringAddress`<sup>Optional</sup> <a name="peeringAddress" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peeringAddress"></a>

```java
public java.lang.String getPeeringAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peering_address VirtualNetworkGateway#peering_address}.

---

##### `peerWeight`<sup>Optional</sup> <a name="peerWeight" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peerWeight"></a>

```java
public java.lang.Number getPeerWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peer_weight VirtualNetworkGateway#peer_weight}.

---

### VirtualNetworkGatewayConfig <a name="VirtualNetworkGatewayConfig" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayConfig;

VirtualNetworkGatewayConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .ipConfiguration(IResolvable)
    .ipConfiguration(java.util.List<VirtualNetworkGatewayIpConfiguration>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sku(java.lang.String)
    .type(java.lang.String)
//  .activeActive(java.lang.Boolean)
//  .activeActive(IResolvable)
//  .bgpSettings(VirtualNetworkGatewayBgpSettings)
//  .defaultLocalNetworkGatewayId(java.lang.String)
//  .enableBgp(java.lang.Boolean)
//  .enableBgp(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualNetworkGatewayTimeouts)
//  .vpnClientConfiguration(VirtualNetworkGatewayVpnClientConfiguration)
//  .vpnType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.ipConfiguration">ipConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.activeActive">activeActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.bgpSettings">bgpSettings</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.defaultLocalNetworkGatewayId">defaultLocalNetworkGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.enableBgp">enableBgp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnClientConfiguration">vpnClientConfiguration</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | vpn_client_configuration block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnType">vpnType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.ipConfiguration"></a>

```java
public java.lang.Object getIpConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#ip_configuration VirtualNetworkGateway#ip_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}.

---

##### `activeActive`<sup>Optional</sup> <a name="activeActive" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.activeActive"></a>

```java
public java.lang.Object getActiveActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}.

---

##### `bgpSettings`<sup>Optional</sup> <a name="bgpSettings" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.bgpSettings"></a>

```java
public VirtualNetworkGatewayBgpSettings getBgpSettings();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#bgp_settings VirtualNetworkGateway#bgp_settings}

---

##### `defaultLocalNetworkGatewayId`<sup>Optional</sup> <a name="defaultLocalNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.defaultLocalNetworkGatewayId"></a>

```java
public java.lang.String getDefaultLocalNetworkGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}.

---

##### `enableBgp`<sup>Optional</sup> <a name="enableBgp" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.enableBgp"></a>

```java
public java.lang.Object getEnableBgp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.timeouts"></a>

```java
public VirtualNetworkGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#timeouts VirtualNetworkGateway#timeouts}

---

##### `vpnClientConfiguration`<sup>Optional</sup> <a name="vpnClientConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnClientConfiguration"></a>

```java
public VirtualNetworkGatewayVpnClientConfiguration getVpnClientConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

vpn_client_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_configuration VirtualNetworkGateway#vpn_client_configuration}

---

##### `vpnType`<sup>Optional</sup> <a name="vpnType" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnType"></a>

```java
public java.lang.String getVpnType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}.

---

### VirtualNetworkGatewayIpConfiguration <a name="VirtualNetworkGatewayIpConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayIpConfiguration;

VirtualNetworkGatewayIpConfiguration.builder()
    .publicIpAddressId(java.lang.String)
    .subnetId(java.lang.String)
//  .name(java.lang.String)
//  .privateIpAddressAllocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#public_ip_address_id VirtualNetworkGateway#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#subnet_id VirtualNetworkGateway#subnet_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.privateIpAddressAllocation">privateIpAddressAllocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#private_ip_address_allocation VirtualNetworkGateway#private_ip_address_allocation}. |

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#public_ip_address_id VirtualNetworkGateway#public_ip_address_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#subnet_id VirtualNetworkGateway#subnet_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `privateIpAddressAllocation`<sup>Optional</sup> <a name="privateIpAddressAllocation" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.privateIpAddressAllocation"></a>

```java
public java.lang.String getPrivateIpAddressAllocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#private_ip_address_allocation VirtualNetworkGateway#private_ip_address_allocation}.

---

### VirtualNetworkGatewayTimeouts <a name="VirtualNetworkGatewayTimeouts" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayTimeouts;

VirtualNetworkGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#create VirtualNetworkGateway#create}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#delete VirtualNetworkGateway#delete}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#read VirtualNetworkGateway#read}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#update VirtualNetworkGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#create VirtualNetworkGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#delete VirtualNetworkGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#read VirtualNetworkGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#update VirtualNetworkGateway#update}.

---

### VirtualNetworkGatewayVpnClientConfiguration <a name="VirtualNetworkGatewayVpnClientConfiguration" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayVpnClientConfiguration;

VirtualNetworkGatewayVpnClientConfiguration.builder()
    .addressSpace(java.util.List<java.lang.String>)
//  .radiusServerAddress(java.lang.String)
//  .radiusServerSecret(java.lang.String)
//  .revokedCertificate(IResolvable)
//  .revokedCertificate(java.util.List<VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate>)
//  .rootCertificate(IResolvable)
//  .rootCertificate(java.util.List<VirtualNetworkGatewayVpnClientConfigurationRootCertificate>)
//  .vpnClientProtocols(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.addressSpace">addressSpace</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#address_space VirtualNetworkGateway#address_space}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerAddress">radiusServerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_address VirtualNetworkGateway#radius_server_address}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerSecret">radiusServerSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_secret VirtualNetworkGateway#radius_server_secret}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.revokedCertificate">revokedCertificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>></code> | revoked_certificate block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.rootCertificate">rootCertificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>></code> | root_certificate block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.vpnClientProtocols">vpnClientProtocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}. |

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.addressSpace"></a>

```java
public java.util.List<java.lang.String> getAddressSpace();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#address_space VirtualNetworkGateway#address_space}.

---

##### `radiusServerAddress`<sup>Optional</sup> <a name="radiusServerAddress" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerAddress"></a>

```java
public java.lang.String getRadiusServerAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_address VirtualNetworkGateway#radius_server_address}.

---

##### `radiusServerSecret`<sup>Optional</sup> <a name="radiusServerSecret" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerSecret"></a>

```java
public java.lang.String getRadiusServerSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_secret VirtualNetworkGateway#radius_server_secret}.

---

##### `revokedCertificate`<sup>Optional</sup> <a name="revokedCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.revokedCertificate"></a>

```java
public java.lang.Object getRevokedCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>>

revoked_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#revoked_certificate VirtualNetworkGateway#revoked_certificate}

---

##### `rootCertificate`<sup>Optional</sup> <a name="rootCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.rootCertificate"></a>

```java
public java.lang.Object getRootCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>>

root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#root_certificate VirtualNetworkGateway#root_certificate}

---

##### `vpnClientProtocols`<sup>Optional</sup> <a name="vpnClientProtocols" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.vpnClientProtocols"></a>

```java
public java.util.List<java.lang.String> getVpnClientProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}.

---

### VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate <a name="VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate;

VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.builder()
    .name(java.lang.String)
    .thumbprint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#thumbprint VirtualNetworkGateway#thumbprint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#thumbprint VirtualNetworkGateway#thumbprint}.

---

### VirtualNetworkGatewayVpnClientConfigurationRootCertificate <a name="VirtualNetworkGatewayVpnClientConfigurationRootCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate;

VirtualNetworkGatewayVpnClientConfigurationRootCertificate.builder()
    .name(java.lang.String)
    .publicCertData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.publicCertData">publicCertData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#public_cert_data VirtualNetworkGateway#public_cert_data}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `publicCertData`<sup>Required</sup> <a name="publicCertData" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.publicCertData"></a>

```java
public java.lang.String getPublicCertData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#public_cert_data VirtualNetworkGateway#public_cert_data}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkGatewayBgpSettingsOutputReference <a name="VirtualNetworkGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayBgpSettingsOutputReference;

new VirtualNetworkGatewayBgpSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetAsn">resetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeeringAddress">resetPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeerWeight">resetPeerWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAsn` <a name="resetAsn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetAsn"></a>

```java
public void resetAsn()
```

##### `resetPeeringAddress` <a name="resetPeeringAddress" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeeringAddress"></a>

```java
public void resetPeeringAddress()
```

##### `resetPeerWeight` <a name="resetPeerWeight" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeerWeight"></a>

```java
public void resetPeerWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asnInput">asnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddressInput">peeringAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeightInput">peerWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asn">asn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddress">peeringAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeight">peerWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asnInput"></a>

```java
public java.lang.Number getAsnInput();
```

- *Type:* java.lang.Number

---

##### `peeringAddressInput`<sup>Optional</sup> <a name="peeringAddressInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddressInput"></a>

```java
public java.lang.String getPeeringAddressInput();
```

- *Type:* java.lang.String

---

##### `peerWeightInput`<sup>Optional</sup> <a name="peerWeightInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeightInput"></a>

```java
public java.lang.Number getPeerWeightInput();
```

- *Type:* java.lang.Number

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

---

##### `peeringAddress`<sup>Required</sup> <a name="peeringAddress" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddress"></a>

```java
public java.lang.String getPeeringAddress();
```

- *Type:* java.lang.String

---

##### `peerWeight`<sup>Required</sup> <a name="peerWeight" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```java
public java.lang.Number getPeerWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.internalValue"></a>

```java
public VirtualNetworkGatewayBgpSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

---


### VirtualNetworkGatewayIpConfigurationList <a name="VirtualNetworkGatewayIpConfigurationList" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayIpConfigurationList;

new VirtualNetworkGatewayIpConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.get"></a>

```java
public VirtualNetworkGatewayIpConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>>

---


### VirtualNetworkGatewayIpConfigurationOutputReference <a name="VirtualNetworkGatewayIpConfigurationOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayIpConfigurationOutputReference;

new VirtualNetworkGatewayIpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetPrivateIpAddressAllocation">resetPrivateIpAddressAllocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPrivateIpAddressAllocation` <a name="resetPrivateIpAddressAllocation" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetPrivateIpAddressAllocation"></a>

```java
public void resetPrivateIpAddressAllocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocationInput">privateIpAddressAllocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressIdInput">publicIpAddressIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocation">privateIpAddressAllocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateIpAddressAllocationInput`<sup>Optional</sup> <a name="privateIpAddressAllocationInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocationInput"></a>

```java
public java.lang.String getPrivateIpAddressAllocationInput();
```

- *Type:* java.lang.String

---

##### `publicIpAddressIdInput`<sup>Optional</sup> <a name="publicIpAddressIdInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressIdInput"></a>

```java
public java.lang.String getPublicIpAddressIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateIpAddressAllocation`<sup>Required</sup> <a name="privateIpAddressAllocation" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocation"></a>

```java
public java.lang.String getPrivateIpAddressAllocation();
```

- *Type:* java.lang.String

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>

---


### VirtualNetworkGatewayTimeoutsOutputReference <a name="VirtualNetworkGatewayTimeoutsOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayTimeoutsOutputReference;

new VirtualNetworkGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>

---


### VirtualNetworkGatewayVpnClientConfigurationOutputReference <a name="VirtualNetworkGatewayVpnClientConfigurationOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference;

new VirtualNetworkGatewayVpnClientConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRevokedCertificate">putRevokedCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRootCertificate">putRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerAddress">resetRadiusServerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerSecret">resetRadiusServerSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRevokedCertificate">resetRevokedCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRootCertificate">resetRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetVpnClientProtocols">resetVpnClientProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRevokedCertificate` <a name="putRevokedCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRevokedCertificate"></a>

```java
public void putRevokedCertificate(IResolvable OR java.util.List<VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRevokedCertificate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>>

---

##### `putRootCertificate` <a name="putRootCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRootCertificate"></a>

```java
public void putRootCertificate(IResolvable OR java.util.List<VirtualNetworkGatewayVpnClientConfigurationRootCertificate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRootCertificate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>>

---

##### `resetRadiusServerAddress` <a name="resetRadiusServerAddress" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerAddress"></a>

```java
public void resetRadiusServerAddress()
```

##### `resetRadiusServerSecret` <a name="resetRadiusServerSecret" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerSecret"></a>

```java
public void resetRadiusServerSecret()
```

##### `resetRevokedCertificate` <a name="resetRevokedCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRevokedCertificate"></a>

```java
public void resetRevokedCertificate()
```

##### `resetRootCertificate` <a name="resetRootCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRootCertificate"></a>

```java
public void resetRootCertificate()
```

##### `resetVpnClientProtocols` <a name="resetVpnClientProtocols" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetVpnClientProtocols"></a>

```java
public void resetVpnClientProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificate">revokedCertificate</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificate">rootCertificate</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList">VirtualNetworkGatewayVpnClientConfigurationRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpaceInput">addressSpaceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddressInput">radiusServerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecretInput">radiusServerSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificateInput">revokedCertificateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificateInput">rootCertificateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocolsInput">vpnClientProtocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpace">addressSpace</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddress">radiusServerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecret">radiusServerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocols">vpnClientProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `revokedCertificate`<sup>Required</sup> <a name="revokedCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificate"></a>

```java
public VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList getRevokedCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList</a>

---

##### `rootCertificate`<sup>Required</sup> <a name="rootCertificate" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificate"></a>

```java
public VirtualNetworkGatewayVpnClientConfigurationRootCertificateList getRootCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList">VirtualNetworkGatewayVpnClientConfigurationRootCertificateList</a>

---

##### `addressSpaceInput`<sup>Optional</sup> <a name="addressSpaceInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpaceInput"></a>

```java
public java.util.List<java.lang.String> getAddressSpaceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `radiusServerAddressInput`<sup>Optional</sup> <a name="radiusServerAddressInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddressInput"></a>

```java
public java.lang.String getRadiusServerAddressInput();
```

- *Type:* java.lang.String

---

##### `radiusServerSecretInput`<sup>Optional</sup> <a name="radiusServerSecretInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecretInput"></a>

```java
public java.lang.String getRadiusServerSecretInput();
```

- *Type:* java.lang.String

---

##### `revokedCertificateInput`<sup>Optional</sup> <a name="revokedCertificateInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificateInput"></a>

```java
public java.lang.Object getRevokedCertificateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>>

---

##### `rootCertificateInput`<sup>Optional</sup> <a name="rootCertificateInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificateInput"></a>

```java
public java.lang.Object getRootCertificateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>>

---

##### `vpnClientProtocolsInput`<sup>Optional</sup> <a name="vpnClientProtocolsInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocolsInput"></a>

```java
public java.util.List<java.lang.String> getVpnClientProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpace"></a>

```java
public java.util.List<java.lang.String> getAddressSpace();
```

- *Type:* java.util.List<java.lang.String>

---

##### `radiusServerAddress`<sup>Required</sup> <a name="radiusServerAddress" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddress"></a>

```java
public java.lang.String getRadiusServerAddress();
```

- *Type:* java.lang.String

---

##### `radiusServerSecret`<sup>Required</sup> <a name="radiusServerSecret" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecret"></a>

```java
public java.lang.String getRadiusServerSecret();
```

- *Type:* java.lang.String

---

##### `vpnClientProtocols`<sup>Required</sup> <a name="vpnClientProtocols" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocols"></a>

```java
public java.util.List<java.lang.String> getVpnClientProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.internalValue"></a>

```java
public VirtualNetworkGatewayVpnClientConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

---


### VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList <a name="VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList;

new VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get"></a>

```java
public VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>>

---


### VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference <a name="VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference;

new VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprintInput"></a>

```java
public java.lang.String getThumbprintInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>

---


### VirtualNetworkGatewayVpnClientConfigurationRootCertificateList <a name="VirtualNetworkGatewayVpnClientConfigurationRootCertificateList" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList;

new VirtualNetworkGatewayVpnClientConfigurationRootCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get"></a>

```java
public VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>>

---


### VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference <a name="VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_network_gateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference;

new VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertDataInput">publicCertDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertData">publicCertData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicCertDataInput`<sup>Optional</sup> <a name="publicCertDataInput" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertDataInput"></a>

```java
public java.lang.String getPublicCertDataInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicCertData`<sup>Required</sup> <a name="publicCertData" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertData"></a>

```java
public java.lang.String getPublicCertData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>

---



